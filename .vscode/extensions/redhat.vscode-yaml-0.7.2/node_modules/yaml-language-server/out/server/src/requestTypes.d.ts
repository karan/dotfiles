import { NotificationType, RequestType } from 'vscode-languageserver';
import { SchemaAdditions, SchemaDeletions } from './languageservice/services/yamlSchemaService';
export declare namespace SchemaAssociationNotification {
    const type: NotificationType<{}, {}>;
}
export declare namespace DynamicCustomSchemaRequestRegistration {
    const type: NotificationType<{}, {}>;
}
export declare namespace VSCodeContentRequest {
    const type: RequestType<{}, {}, {}, {}>;
}
export declare namespace CustomSchemaContentRequest {
    const type: RequestType<{}, {}, {}, {}>;
}
export declare namespace CustomSchemaRequest {
    const type: RequestType<{}, {}, {}, {}>;
}
export declare namespace ColorSymbolRequest {
    const type: RequestType<{}, {}, {}, {}>;
}
export declare namespace SchemaModificationNotification {
    const type: RequestType<SchemaAdditions | SchemaDeletions, void, {}, {}>;
}
