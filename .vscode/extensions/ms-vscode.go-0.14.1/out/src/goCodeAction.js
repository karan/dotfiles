/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const goImport_1 = require("./goImport");
class GoCodeActionProvider {
    provideCodeActions(document, range, context, token) {
        const promises = context.diagnostics.map((diag) => {
            // When a name is not found but could refer to a package, offer to add import
            if (diag.message.indexOf('undefined: ') === 0) {
                const [_, name] = /^undefined: (\S*)/.exec(diag.message);
                return goImport_1.listPackages().then((packages) => {
                    const commands = packages
                        .filter((pkg) => pkg === name || pkg.endsWith('/' + name))
                        .map((pkg) => {
                        return {
                            title: 'import "' + pkg + '"',
                            command: 'go.import.add',
                            arguments: [{ importPath: pkg, from: 'codeAction' }]
                        };
                    });
                    return commands;
                });
            }
            return [];
        });
        return Promise.all(promises).then((arrs) => {
            const results = {};
            for (const segment of arrs) {
                for (const item of segment) {
                    results[item.title] = item;
                }
            }
            const ret = [];
            for (const title of Object.keys(results).sort()) {
                ret.push(results[title]);
            }
            return ret;
        });
    }
}
exports.GoCodeActionProvider = GoCodeActionProvider;
//# sourceMappingURL=goCodeAction.js.map