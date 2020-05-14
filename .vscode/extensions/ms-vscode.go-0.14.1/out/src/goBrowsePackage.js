/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const cp = require("child_process");
const path = require("path");
const vscode = require("vscode");
const goPackages_1 = require("./goPackages");
const goPath_1 = require("./goPath");
const util_1 = require("./util");
function browsePackages() {
    let workDir = '';
    let selectedText = '';
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        const currentUri = editor.document.uri;
        workDir = path.dirname(currentUri.fsPath);
        const selection = editor.selection;
        if (!selection.isEmpty) {
            // get selected text
            selectedText = editor.document.getText(selection);
        }
        else {
            // if selection is empty, then get the whole line the cursor is currently on.
            selectedText = editor.document.lineAt(selection.active.line).text;
        }
        selectedText = util_1.getImportPath(selectedText) || selectedText.trim();
    }
    else if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length === 1) {
        const currentUri = vscode.workspace.workspaceFolders[0].uri;
        workDir = currentUri.fsPath;
    }
    showPackageFiles(selectedText, true, workDir);
}
exports.browsePackages = browsePackages;
function showPackageFiles(pkg, showAllPkgsIfPkgNotFound, workDir) {
    const goRuntimePath = util_1.getBinPath('go');
    if (!goRuntimePath) {
        return vscode.window.showErrorMessage(`Failed to run "go list" to fetch packages as the "go" binary cannot be found in either GOROOT(${process.env['GOROOT']}) or PATH(${goPath_1.envPath})`);
    }
    if (!pkg && showAllPkgsIfPkgNotFound) {
        return showPackageList(workDir);
    }
    const options = {
        env: Object.assign({}, process.env, { GOPATH: util_1.getCurrentGoPath() })
    };
    if (workDir) {
        options['cwd'] = workDir;
    }
    cp.execFile(goRuntimePath, ['list', '-f', '{{.Dir}}:{{.GoFiles}}:{{.TestGoFiles}}:{{.XTestGoFiles}}', pkg], options, (err, stdout, stderr) => {
        if (!stdout || stdout.indexOf(':') === -1) {
            if (showAllPkgsIfPkgNotFound) {
                return showPackageList(workDir);
            }
            return;
        }
        const matches = stdout && stdout.match(/(.*):\[(.*)\]:\[(.*)\]:\[(.*)\]/);
        if (matches) {
            const dir = matches[1];
            let files = matches[2] ? matches[2].split(' ') : [];
            const testfiles = matches[3] ? matches[3].split(' ') : [];
            const xtestfiles = matches[4] ? matches[4].split(' ') : [];
            files = files.concat(testfiles);
            files = files.concat(xtestfiles);
            vscode.window.showQuickPick(files, { placeHolder: `Below are Go files from ${pkg}` }).then((file) => {
                // if user abandoned list, file will be null and path.join will error out.
                // therefore return.
                if (!file) {
                    return;
                }
                vscode.workspace.openTextDocument(path.join(dir, file)).then((document) => {
                    vscode.window.showTextDocument(document);
                });
            });
        }
    });
}
function showPackageList(workDir) {
    return goPackages_1.getAllPackages(workDir).then((pkgMap) => {
        const pkgs = Array.from(pkgMap.keys());
        if (pkgs.length === 0) {
            return vscode.window.showErrorMessage('Could not find packages. Ensure `gopkgs -format {{.Name}};{{.ImportPath}}` runs successfully.');
        }
        vscode.window
            .showQuickPick(pkgs.sort(), { placeHolder: 'Select a package to browse' })
            .then((pkgFromDropdown) => {
            if (!pkgFromDropdown) {
                return;
            }
            showPackageFiles(pkgFromDropdown, false, workDir);
        });
    });
}
//# sourceMappingURL=goBrowsePackage.js.map