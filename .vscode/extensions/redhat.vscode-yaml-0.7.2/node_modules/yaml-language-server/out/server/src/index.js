"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./languageservice/yamlLanguageService"));
var vscode_json_languageservice_1 = require("vscode-json-languageservice");
exports.getJSONLanguageService = vscode_json_languageservice_1.getLanguageService;
__export(require("vscode-languageserver-types"));
//# sourceMappingURL=index.js.map