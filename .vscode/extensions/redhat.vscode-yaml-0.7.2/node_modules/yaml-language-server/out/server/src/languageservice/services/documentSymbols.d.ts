import { SymbolInformation, TextDocument, DocumentSymbol } from 'vscode-languageserver-types';
import { YAMLSchemaService } from './yamlSchemaService';
export declare class YAMLDocumentSymbols {
    private jsonDocumentSymbols;
    constructor(schemaService: YAMLSchemaService);
    findDocumentSymbols(document: TextDocument): SymbolInformation[];
    findHierarchicalDocumentSymbols(document: TextDocument): DocumentSymbol[];
}
