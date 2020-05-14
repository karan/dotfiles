import { PromiseConstructor, Thenable } from 'vscode-json-languageservice';
import { Hover, TextDocument, Position } from 'vscode-languageserver-types';
import { LanguageSettings } from '../yamlLanguageService';
import { YAMLSchemaService } from './yamlSchemaService';
export declare class YAMLHover {
    private promise;
    private shouldHover;
    private jsonHover;
    constructor(schemaService: YAMLSchemaService, promiseConstructor: PromiseConstructor);
    configure(languageSettings: LanguageSettings): void;
    doHover(document: TextDocument, position: Position): Thenable<Hover>;
}
