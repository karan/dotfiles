#### 0.7.2
- Fix the way default snippets is handled when we have boolean values [#PR](https://github.com/redhat-developer/yaml-language-server/pull/234)

#### 0.7.1
- Allow contributor API to contribute multiple schemas for the same file [#PR](https://github.com/redhat-developer/yaml-language-server/pull/227)
- Fix issue with arrays in default snippets [#PR](https://github.com/redhat-developer/yaml-language-server/pull/226)

#### 0.7.0
- Updates kubernetes schema to 1.17.0 [#Commit](https://github.com/redhat-developer/yaml-language-server/commit/68d0f395ccc12abf9f180fa39ce49b77d52863ad)
- Added API for modifiying schemas in memory [#151](https://github.com/redhat-developer/yaml-language-server/issues/151)
- Updated yaml completion to use JSON 7 Parser [#150](https://github.com/redhat-developer/yaml-language-server/issues/150)
- Server side snippet support [#205](https://github.com/redhat-developer/yaml-language-server/issues/205)
- Fix issue with language server not issuing warnings on duplicate keys [#Commit](https://github.com/redhat-developer/yaml-language-server/commit/20a8b07cd8f054d1374cbab17ef479320ac5669c)
- Fix for collecting completion items if array contains objects [#PR](https://github.com/redhat-developer/yaml-language-server/pull/224)
- Fix for merge key error with JSON Schema [#PR](https://github.com/redhat-developer/yaml-language-server/pull/222)

#### 0.6.1
- Fix for setting kubernetes in yaml.schemas gives error [#202](https://github.com/redhat-developer/yaml-language-server/issues/202)

#### 0.6.0
- Fix for schema sequence custom property [#PR](https://github.com/redhat-developer/yaml-language-server/pull/197)

#### 0.5.3
- Remove document range formatter registration [#PR](https://github.com/redhat-developer/yaml-language-server/pull/179)
- Catch errors that happen when schema store schemas cannot be grabbed [#PR](https://github.com/redhat-developer/yaml-language-server/pull/183)
- Fix for selection operators [#227](https://github.com/redhat-developer/vscode-yaml/issues/227)

#### 0.5.2
- Fix issue with format on copy [#220](https://github.com/redhat-developer/vscode-yaml/issues/220)
- Fix issue with custom schema provider where hover and validation weren't working [#216](https://github.com/redhat-developer/vscode-yaml/issues/216)
- Support URL schemes other than file or untitled [#PR](https://github.com/redhat-developer/vscode-yaml/pull/224)

#### 0.5.1
- Fix initialization problem that occurs when you write yaml without opening a folder/workspace/project

#### 0.5.0
- Fixed offset of undefined when hovering [#162](https://github.com/redhat-developer/yaml-language-server/issues/162)
- Fixed relative path schema loading [#154](https://github.com/redhat-developer/yaml-language-server/issues/154)
- Realigned features of YAML Language Server with JSON Language Server [#142](https://github.com/redhat-developer/yaml-language-server/issues/142)
- Adds in custom kubernetes schema comparator
- Fix for autocompletion not working when there are multiple enums available
- Fix for showing the correct validation when a key has an associated null value for kubernetes
- Fix for Array item properties being created with the wrong indent

#### 0.4.1
- Updated the kubernetes schema to be an upstream one [#PR](https://github.com/redhat-developer/yaml-language-server/pull/108)
- .clang-format and _clang-format are now associated with YAML [#183](https://github.com/redhat-developer/vscode-yaml/issues/183)

#### 0.4.0
- Allow custom tags to have multiple types [#77](https://github.com/redhat-developer/yaml-language-server/issues/77)
- Made the formatter respect the yaml.format.enable setting [#PR](https://github.com/redhat-developer/yaml-language-server/pull/126)
- Updated the tmLanguage [#Commit](https://github.com/redhat-developer/vscode-yaml/commit/88b3715cc735a35ae83e5dfece42af8717cfc709)
- Fixed the yaml.trace.server description
- Added yaml.format.printWidth setting

#### 0.3.0

- Fixed custom tags crashing the language server [#112](https://github.com/redhat-developer/yaml-language-server/commit/4bcd36d629ef2c64641dc6edc948dbd02f35c437)
- Added setting yaml.schemaStore.enable to enable/disable the schema store [#115](https://github.com/redhat-developer/yaml-language-server/commit/4aa28a7dacadcc68126bd26e3b5311e046348799)
- Use the language server tab size when formatting [#116](https://github.com/redhat-developer/yaml-language-server/commit/1458e25926c7189cefc383141f4fad1d14a568b8)
- Only set CompletionItem.textEdit if it encompasses a single line [#139](https://github.com/redhat-developer/vscode-yaml/issues/139)

#### 0.2.1

- Added fix for language server crashing when settings.yaml.format was not sent [#111](https://github.com/redhat-developer/yaml-language-server/issues/111)

#### 0.2.0

- Added fix for bracket spacing option in formatter [#Commit](https://github.com/redhat-developer/yaml-language-server/commit/3b79ef397dbd215744c4577da9227298b3447bad)
- Added fix for boolean type [#Commit](https://github.com/redhat-developer/yaml-language-server/commit/9351ef54348e0a967a672e7c0f45b091ed53c533)
- Renamed extension to YAML [#Commit](https://github.com/redhat-developer/vscode-yaml/commit/cb59f85b3191fa30290dada1366d4b0c7e916f2b)

#### 0.1.0

- Fixed region markers not showing [#Commit](https://github.com/redhat-developer/vscode-yaml/commit/66852c9541048010829c88672170d13fc69221a6)

#### 0.0.17

- New icon [#Commit](https://github.com/redhat-developer/vscode-yaml/commit/2f49d24abe7be0df1a4999b48345b7643892b5c9)
- Ability to toggle hover/autocompletion [#Commit](https://github.com/redhat-developer/vscode-yaml/commit/abc35b1734c126f122a7635ba6b5ad5b55a0af5c)
- Add formatter settings [#Commit](https://github.com/redhat-developer/vscode-yaml/commit/ee6b82500b2e1bec9697dad3f0047fb619e482e1)
- Added a new formatter that uses prettier [#Commit](https://github.com/redhat-developer/yaml-language-server/commit/a5092e3d33a2e208bfea7941076518dedd2aba7b)

#### 0.0.16

- Support intellisense default value [#86](https://github.com/redhat-developer/yaml-language-server/pull/86)
- Fix intellisense doesn't work for array item [#85](https://github.com/redhat-developer/yaml-language-server/pull/85)

#### 0.0.15

- Fix handling scenario of multiple documents in single yaml file [#81](https://github.com/redhat-developer/yaml-language-server/commit/38da50092285aa499930d0e95fbbd7960b37b670)
- Support associate schemas with files in a regular expression [#Commit](https://github.com/redhat-developer/yaml-language-server/commit/d4a05e3dd72f55c53f1b0325c521a58f688839c9)

#### 0.0.14

- Fixed strange behaviour of formatter [#90](https://github.com/redhat-developer/vscode-yaml/issues/90)
- Fixed dynamic registration of formatter [#74](https://github.com/redhat-developer/yaml-language-server/issues/74)
- Relative paths fix [#92](https://github.com/redhat-developer/vscode-yaml/issues/92)

#### 0.0.13
- Show errors if schema cannot be grabbed [#73](https://github.com/redhat-developer/yaml-language-server/issues/73)
- The validator should support null values [#72](https://github.com/redhat-developer/yaml-language-server/issues/72)
- Server returning nothing on things such as completion errors Eclipse Che [#66](https://github.com/redhat-developer/yaml-language-server/issues/66)
- Return promises that resolve to null [#PR-71](https://github.com/redhat-developer/yaml-language-server/pull/71)
- Remove unused dependency to deep-equal  [#PR-70](https://github.com/redhat-developer/yaml-language-server/pull/70)
- Added custom tags to autocompletion [#Commit](https://github.com/redhat-developer/yaml-language-server/commit/73c244a3efe09ec4250def78068c54af3acaed58)
- Remove yarn.lock from language contributes [#Commit](https://github.com/redhat-developer/vscode-yaml/commit/c65a3f870206306f5714cc7e5f0a181c40770201)

#### 0.0.12
- Support for custom tags [#59](https://github.com/redhat-developer/yaml-language-server/issues/59)
- Incorrect duplicate key registered when using YAML anchors [#82](https://github.com/redhat-developer/vscode-yaml/issues/82)
- Automatically insert colon on autocomplete [#78](https://github.com/redhat-developer/vscode-yaml/issues/78)

#### 0.0.11
- Fix for completion helper if it contains \r [#37](https://github.com/redhat-developer/yaml-language-server/issues/37)

#### 0.0.10
- Programmatically associate YAML files with schemas by other extensions [#61](https://github.com/redhat-developer/vscode-yaml/issues/61)
- Autocompletion not triggered while typing [#46](https://github.com/redhat-developer/vscode-yaml/issues/46)

#### 0.0.9
- Remove console.log from jsonSchemaService [#49](https://github.com/redhat-developer/yaml-language-server/issues/49)
- Change "Property {$property_name} is not allowed" error message [#42](https://github.com/redhat-developer/yaml-language-server/issues/42)
- New Kubernetes Schema + Updated support for Kubernetes [#40](https://github.com/redhat-developer/yaml-language-server/issues/40)

#### 0.0.8
- Added Kedge back in as one of the default schemas
- Added file watch for json schema files in the workspace [#34](https://github.com/redhat-developer/yaml-language-server/issues/34)
- Multi root settings [#50](https://github.com/redhat-developer/vscode-yaml/issues/50)
- Fix for crashing yaml language server when !include is present [#52](https://github.com/redhat-developer/vscode-yaml/issues/52)
- Update tests to work on windows [#30](https://github.com/redhat-developer/yaml-language-server/issues/30)

#### 0.0.7
- Added validation toggle in settings [#20](https://github.com/redhat-developer/yaml-language-server/issues/20)
- YAML Schemas are pulled from JSON Schema Store [#15](https://github.com/redhat-developer/yaml-language-server/issues/15)
- YAML Diagnostics throw on a single line instead of the entire file [#19](https://github.com/redhat-developer/yaml-language-server/issues/19)
- Fix for getNodeFromOffset [#18](https://github.com/redhat-developer/yaml-language-server/issues/18)

#### 0.0.6
- Hotfix for making multiple schemas in the settings work again

#### 0.0.5
- Fixed Schema validation reports errors in valid YAML document [#42](https://github.com/redhat-developer/vscode-yaml/issues/42)
- Fixed Support for multiple YAML documents in single file [#43](https://github.com/redhat-developer/vscode-yaml/issues/43)

#### 0.0.4
- Fixed support for kubernetes files
- Fixed boolean notation for validation [#40](https://github.com/redhat-developer/vscode-yaml/issues/40)
- Fixed autocompletion for first new list item [#39](https://github.com/redhat-developer/vscode-yaml/issues/39)

#### 0.0.3
- Added new autocompletion service which is better for json schemas
- Added yamlValidation contribution point [#37](https://github.com/redhat-developer/vscode-yaml/issues/37)

#### 0.0.1
- Initial release with support for hover, document outlining, validation and auto completion
