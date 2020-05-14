/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const goLiveErrors_1 = require("./goLiveErrors");
const util_1 = require("./util");
/**
 * Returns the import path for a given tool, at a given Go version.
 * @param tool 		Object of type `Tool` for the Go tool.
 * @param goVersion The current Go version.
 */
function getImportPath(tool, goVersion) {
    // For older versions of Go, install the older version of gocode.
    if (tool.name === 'gocode' && goVersion.lt('1.10')) {
        return 'github.com/nsf/gocode';
    }
    return tool.importPath;
}
exports.getImportPath = getImportPath;
/**
 * Returns boolean denoting if the import path for the given tool ends with `/...`
 * and if the version of Go supports installing wildcard paths in module mode.
 * @param tool  	Object of type `Tool` for the Go tool.
 * @param goVersion The current Go version.
 */
function disableModulesForWildcard(tool, goVersion) {
    const importPath = getImportPath(tool, goVersion);
    const isWildcard = importPath.endsWith('...');
    // Only Go >= 1.13 supports installing wildcards in module mode.
    return isWildcard && goVersion.lt('1.13');
}
exports.disableModulesForWildcard = disableModulesForWildcard;
function containsTool(tools, tool) {
    return tools.indexOf(tool) > -1;
}
exports.containsTool = containsTool;
function containsString(tools, toolName) {
    return tools.some((tool) => tool.name === toolName);
}
exports.containsString = containsString;
function getTool(name) {
    return allToolsInformation[name];
}
exports.getTool = getTool;
// hasModSuffix returns true if the given tool has a different, module-specific
// name to avoid conflicts.
function hasModSuffix(tool) {
    return tool.name.endsWith('-gomod');
}
exports.hasModSuffix = hasModSuffix;
function isGocode(tool) {
    return tool.name === 'gocode' || tool.name === 'gocode-gomod';
}
exports.isGocode = isGocode;
function getConfiguredTools(goVersion) {
    const tools = [];
    function maybeAddTool(name) {
        const tool = allToolsInformation[name];
        if (tool) {
            tools.push(tool);
        }
    }
    // Start with default tools that should always be installed.
    for (const name of [
        'gocode',
        'gopkgs',
        'go-outline',
        'go-symbols',
        'guru',
        'gorename',
        'gotests',
        'gomodifytags',
        'impl',
        'fillstruct',
        'goplay',
        'godoctor'
    ]) {
        maybeAddTool(name);
    }
    // Check if the system supports dlv, i.e. is 64-bit.
    // There doesn't seem to be a good way to check if the mips and s390
    // families are 64-bit, so just try to install it and hope for the best.
    if (process.arch.match(/^(arm64|mips|mipsel|ppc64|s390|s390x|x64)$/)) {
        maybeAddTool('dlv');
    }
    // gocode-gomod needed in go 1.11 & higher
    if (goVersion.gt('1.10')) {
        maybeAddTool('gocode-gomod');
    }
    const goConfig = util_1.getGoConfig();
    // Add the doc/def tool that was chosen by the user.
    switch (goConfig['docsTool']) {
        case 'godoc':
            maybeAddTool('godef');
            break;
        default:
            maybeAddTool(goConfig['docsTool']);
            break;
    }
    // Add the format tool that was chosen by the user.
    maybeAddTool(goConfig['formatTool']);
    // Add the linter that was chosen by the user.
    maybeAddTool(goConfig['lintTool']);
    // Add the language server for Go versions > 1.10 if user has choosen to do so.
    if (goConfig['useLanguageServer'] && goVersion.gt('1.10')) {
        maybeAddTool('gopls');
    }
    if (goLiveErrors_1.goLiveErrorsEnabled()) {
        maybeAddTool('gotype-live');
    }
    return tools;
}
exports.getConfiguredTools = getConfiguredTools;
const allToolsInformation = {
    'gocode': {
        name: 'gocode',
        importPath: 'github.com/mdempsky/gocode',
        isImportant: true,
        description: 'Auto-completion, does not work with modules'
    },
    'gocode-gomod': {
        name: 'gocode-gomod',
        importPath: 'github.com/stamblerre/gocode',
        isImportant: true,
        description: 'Auto-completion, works with modules'
    },
    'gopkgs': {
        name: 'gopkgs',
        importPath: 'github.com/uudashr/gopkgs/v2/cmd/gopkgs',
        isImportant: true,
        description: 'Auto-completion of unimported packages & Add Import feature'
    },
    'go-outline': {
        name: 'go-outline',
        importPath: 'github.com/ramya-rao-a/go-outline',
        isImportant: true,
        description: 'Go to symbol in file'
    },
    'go-symbols': {
        name: 'go-symbols',
        importPath: 'github.com/acroca/go-symbols',
        isImportant: false,
        description: 'Go to symbol in workspace'
    },
    'guru': {
        name: 'guru',
        importPath: 'golang.org/x/tools/cmd/guru',
        isImportant: false,
        description: 'Find all references and Go to implementation of symbols'
    },
    'gorename': {
        name: 'gorename',
        importPath: 'golang.org/x/tools/cmd/gorename',
        isImportant: false,
        description: 'Rename symbols'
    },
    'gomodifytags': {
        name: 'gomodifytags',
        importPath: 'github.com/fatih/gomodifytags',
        isImportant: false,
        description: 'Modify tags on structs'
    },
    'goplay': {
        name: 'goplay',
        importPath: 'github.com/haya14busa/goplay/cmd/goplay',
        isImportant: false,
        description: 'The Go playground'
    },
    'impl': {
        name: 'impl',
        importPath: 'github.com/josharian/impl',
        isImportant: false,
        description: 'Stubs for interfaces'
    },
    'gotype-live': {
        name: 'gotype-live',
        importPath: 'github.com/tylerb/gotype-live',
        isImportant: false,
        description: 'Show errors as you type'
    },
    'godef': {
        name: 'godef',
        importPath: 'github.com/rogpeppe/godef',
        isImportant: true,
        description: 'Go to definition'
    },
    'gogetdoc': {
        name: 'gogetdoc',
        importPath: 'github.com/zmb3/gogetdoc',
        isImportant: true,
        description: 'Go to definition & text shown on hover'
    },
    'goimports': {
        name: 'goimports',
        importPath: 'golang.org/x/tools/cmd/goimports',
        isImportant: true,
        description: 'Formatter'
    },
    'goreturns': {
        name: 'goreturns',
        importPath: 'github.com/sqs/goreturns',
        isImportant: true,
        description: 'Formatter'
    },
    'goformat': {
        name: 'goformat',
        importPath: 'winterdrache.de/goformat/goformat',
        isImportant: false,
        description: 'Formatter'
    },
    'golint': {
        name: 'golint',
        importPath: 'golang.org/x/lint/golint',
        isImportant: true,
        description: 'Linter'
    },
    'gotests': {
        name: 'gotests',
        importPath: 'github.com/cweill/gotests/...',
        isImportant: false,
        description: 'Generate unit tests'
    },
    'staticcheck': {
        name: 'staticcheck',
        importPath: 'honnef.co/go/tools/...',
        isImportant: true,
        description: 'Linter'
    },
    'golangci-lint': {
        name: 'golangci-lint',
        importPath: 'github.com/golangci/golangci-lint/cmd/golangci-lint',
        isImportant: true,
        description: 'Linter'
    },
    'revive': {
        name: 'revive',
        importPath: 'github.com/mgechev/revive',
        isImportant: true,
        description: 'Linter'
    },
    'gopls': {
        name: 'gopls',
        importPath: 'golang.org/x/tools/gopls',
        isImportant: false,
        description: 'Language Server from Google'
    },
    'dlv': {
        name: 'dlv',
        importPath: 'github.com/go-delve/delve/cmd/dlv',
        isImportant: false,
        description: 'Debugging'
    },
    'fillstruct': {
        name: 'fillstruct',
        importPath: 'github.com/davidrjenni/reftools/cmd/fillstruct',
        isImportant: false,
        description: 'Fill structs with defaults'
    },
    'godoctor': {
        name: 'godoctor',
        importPath: 'github.com/godoctor/godoctor',
        isImportant: false,
        description: 'Extract to functions and variables'
    }
};
//# sourceMappingURL=goTools.js.map