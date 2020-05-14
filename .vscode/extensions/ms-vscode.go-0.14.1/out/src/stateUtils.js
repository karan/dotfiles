"use strict";
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
let globalState;
let workspaceState;
function getFromGlobalState(key, defaultValue) {
    if (!globalState) {
        return defaultValue;
    }
    return globalState.get(key, defaultValue);
}
exports.getFromGlobalState = getFromGlobalState;
function updateGlobalState(key, value) {
    if (!globalState) {
        return;
    }
    return globalState.update(key, value);
}
exports.updateGlobalState = updateGlobalState;
function setGlobalState(state) {
    globalState = state;
}
exports.setGlobalState = setGlobalState;
function getFromWorkspaceState(key, defaultValue) {
    if (!workspaceState) {
        return defaultValue;
    }
    return workspaceState.get(key, defaultValue);
}
exports.getFromWorkspaceState = getFromWorkspaceState;
function updateWorkspaceState(key, value) {
    if (!workspaceState) {
        return;
    }
    return workspaceState.update(key, value);
}
exports.updateWorkspaceState = updateWorkspaceState;
function setWorkspaceState(state) {
    workspaceState = state;
}
exports.setWorkspaceState = setWorkspaceState;
//# sourceMappingURL=stateUtils.js.map