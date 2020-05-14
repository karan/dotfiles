/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Red Hat, Inc. All rights reserved.
 *  Copyright (c) Adam Voss. All rights reserved.
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const vscode_1 = require("vscode");
const vscode_languageclient_1 = require("vscode-languageclient");
const vscode_uri_1 = require("vscode-uri");
const schema_extension_api_1 = require("./schema-extension-api");
var SchemaAssociationNotification;
(function (SchemaAssociationNotification) {
    SchemaAssociationNotification.type = new vscode_languageclient_1.NotificationType('json/schemaAssociations');
})(SchemaAssociationNotification || (SchemaAssociationNotification = {}));
var DynamicCustomSchemaRequestRegistration;
(function (DynamicCustomSchemaRequestRegistration) {
    DynamicCustomSchemaRequestRegistration.type = new vscode_languageclient_1.NotificationType('yaml/registerCustomSchemaRequest');
})(DynamicCustomSchemaRequestRegistration || (DynamicCustomSchemaRequestRegistration = {}));
function activate(context) {
    // The YAML language server is implemented in node
    let serverModule = context.asAbsolutePath(path.join('node_modules', 'yaml-language-server', 'out', 'server', 'src', 'server.js'));
    // The debug options for the server
    let debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };
    // If the extension is launched in debug mode then the debug server options are used
    // Otherwise the run options are used
    let serverOptions = {
        run: { module: serverModule, transport: vscode_languageclient_1.TransportKind.ipc },
        debug: { module: serverModule, transport: vscode_languageclient_1.TransportKind.ipc, options: debugOptions }
    };
    // Options to control the language client
    let clientOptions = {
        // Register the server for on disk and newly created YAML documents
        documentSelector: [
            { language: 'yaml' }
        ],
        synchronize: {
            // Synchronize these setting sections with the server
            configurationSection: ['yaml', 'http.proxy', 'http.proxyStrictSSL'],
            // Notify the server about file changes to YAML and JSON files contained in the workspace
            fileEvents: [
                vscode_1.workspace.createFileSystemWatcher('**/*.?(e)y?(a)ml'),
                vscode_1.workspace.createFileSystemWatcher('**/*.json')
            ]
        }
    };
    // Create the language client and start it
    let client = new vscode_languageclient_1.LanguageClient('yaml', 'YAML Support', serverOptions, clientOptions);
    let disposable = client.start();
    const schemaExtensionAPI = new schema_extension_api_1.SchemaExtensionAPI(client);
    // Push the disposable to the context's subscriptions so that the
    // client can be deactivated on extension deactivation
    context.subscriptions.push(disposable);
    client.onReady().then(() => {
        // Send a notification to the server with any YAML schema associations in all extensions
        client.sendNotification(SchemaAssociationNotification.type, getSchemaAssociation(context));
        // If the extensions change, fire this notification again to pick up on any association changes
        vscode_1.extensions.onDidChange(_ => {
            client.sendNotification(SchemaAssociationNotification.type, getSchemaAssociation(context));
        });
        // Tell the server that the client is ready to provide custom schema content
        client.sendNotification(DynamicCustomSchemaRequestRegistration.type);
        // If the server asks for custom schema content, get it and send it back
        client.onRequest(schema_extension_api_1.CUSTOM_SCHEMA_REQUEST, (resource) => {
            return schemaExtensionAPI.requestCustomSchema(resource);
        });
        client.onRequest(schema_extension_api_1.CUSTOM_CONTENT_REQUEST, (uri) => {
            return schemaExtensionAPI.requestCustomSchemaContent(uri);
        });
    });
    return schemaExtensionAPI;
}
exports.activate = activate;
function getSchemaAssociation(context) {
    let associations = {};
    // Scan all extensions
    vscode_1.extensions.all.forEach(extension => {
        let packageJSON = extension.packageJSON;
        // Look for yamlValidation contribution point in the package.json
        if (packageJSON && packageJSON.contributes && packageJSON.contributes.yamlValidation) {
            let yamlValidation = packageJSON.contributes.yamlValidation;
            // If the extension provides YAML validation
            if (Array.isArray(yamlValidation)) {
                yamlValidation.forEach(jv => {
                    // Get the extension's YAML schema associations
                    let { fileMatch, url } = jv;
                    if (fileMatch && url) {
                        // Convert relative file paths to absolute file URIs
                        if (url[0] === '.' && url[1] === '/') {
                            url = vscode_uri_1.URI.file(path.join(extension.extensionPath, url)).toString();
                        }
                        // Replace path variables
                        if (fileMatch[0] === '%') {
                            fileMatch = fileMatch.replace(/%APP_SETTINGS_HOME%/, '/User');
                            fileMatch = fileMatch.replace(/%APP_WORKSPACES_HOME%/, '/Workspaces');
                        }
                        else if (fileMatch.charAt(0) !== '/' && !fileMatch.match(/\w+:\/\//)) {
                            fileMatch = '/' + fileMatch;
                        }
                        // Create a file-schema association
                        let association = associations[fileMatch];
                        if (!association) {
                            association = [];
                            associations[fileMatch] = association;
                        }
                        // Store the file-schema association
                        association.push(url);
                    }
                });
            }
        }
    });
    return associations;
}
//# sourceMappingURL=extension.js.map