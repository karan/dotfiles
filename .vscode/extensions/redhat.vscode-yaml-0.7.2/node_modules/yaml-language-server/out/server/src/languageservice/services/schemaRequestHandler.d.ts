import { IConnection } from 'vscode-languageserver';
/**
 * Handles schema content requests given the schema URI
 * @param uri can be a local file, vscode request, http(s) request or a custom request
 */
export declare const schemaRequestHandler: (connection: IConnection, uri: string) => Thenable<string>;
