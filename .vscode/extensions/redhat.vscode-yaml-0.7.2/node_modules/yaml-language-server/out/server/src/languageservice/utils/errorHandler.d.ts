export declare class ErrorHandler {
    private errorResultsList;
    private textDocument;
    constructor(textDocument: any);
    addErrorResult(errorNode: any, errorMessage: any, errorType: any): void;
    getErrorResultsList(): any;
}
