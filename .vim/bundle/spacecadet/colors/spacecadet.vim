" Vim color file
" Converted from Textmate theme SpaceCadet using Coloration v0.3.2 (http://github.com/sickill/coloration)

set background=dark
highlight clear

if exists("syntax_on")
  syntax reset
endif

let g:colors_name = "spaceCadet"

hi Cursor ctermfg=232 ctermbg=89 cterm=NONE guifg=#0d0d0d guibg=#7f005d gui=NONE
hi Visual ctermfg=NONE ctermbg=52 cterm=NONE guifg=NONE guibg=#40002f gui=NONE
hi CursorLine ctermfg=NONE ctermbg=16 cterm=NONE guifg=NONE guibg=#222320 gui=NONE
hi CursorColumn ctermfg=NONE ctermbg=16 cterm=NONE guifg=NONE guibg=#222320 gui=NONE
hi ColorColumn ctermfg=NONE ctermbg=16 cterm=NONE guifg=NONE guibg=#222320 gui=NONE
hi LineNr ctermfg=101 ctermbg=16 cterm=NONE guifg=#757a6e guibg=#222320 gui=NONE
hi VertSplit ctermfg=59 ctermbg=59 cterm=NONE guifg=#494c45 guibg=#494c45 gui=NONE
hi MatchParen ctermfg=65 ctermbg=NONE cterm=underline guifg=#728059 guibg=NONE gui=underline
hi StatusLine ctermfg=188 ctermbg=59 cterm=bold guifg=#dde6cf guibg=#494c45 gui=bold
hi StatusLineNC ctermfg=188 ctermbg=59 cterm=NONE guifg=#dde6cf guibg=#494c45 gui=NONE
hi Pmenu ctermfg=67 ctermbg=NONE cterm=NONE guifg=#6078bf guibg=NONE gui=NONE
hi PmenuSel ctermfg=NONE ctermbg=52 cterm=NONE guifg=NONE guibg=#40002f gui=NONE
hi IncSearch ctermfg=232 ctermbg=96 cterm=NONE guifg=#0d0d0d guibg=#805978 gui=NONE
hi Search ctermfg=NONE ctermbg=NONE cterm=underline guifg=NONE guibg=NONE gui=underline
hi Directory ctermfg=137 ctermbg=NONE cterm=NONE guifg=#a8885a guibg=NONE gui=NONE
hi Folded ctermfg=59 ctermbg=232 cterm=NONE guifg=#473c45 guibg=#0d0d0d gui=NONE

hi Normal ctermfg=188 ctermbg=232 cterm=NONE guifg=#dde6cf guibg=#0d0d0d gui=NONE
hi Boolean ctermfg=137 ctermbg=NONE cterm=NONE guifg=#a8885a guibg=NONE gui=NONE
hi Character ctermfg=137 ctermbg=NONE cterm=NONE guifg=#a8885a guibg=NONE gui=NONE
hi Comment ctermfg=59 ctermbg=NONE cterm=NONE guifg=#473c45 guibg=NONE gui=NONE
hi Conditional ctermfg=65 ctermbg=NONE cterm=NONE guifg=#728059 guibg=NONE gui=NONE
hi Constant ctermfg=137 ctermbg=NONE cterm=NONE guifg=#a8885a guibg=NONE gui=NONE
hi Define ctermfg=65 ctermbg=NONE cterm=NONE guifg=#728059 guibg=NONE gui=NONE
hi DiffAdd ctermfg=188 ctermbg=64 cterm=bold guifg=#dde6cf guibg=#417e07 gui=bold
hi DiffDelete ctermfg=88 ctermbg=NONE cterm=NONE guifg=#860303 guibg=NONE gui=NONE
hi DiffChange ctermfg=188 ctermbg=17 cterm=NONE guifg=#dde6cf guibg=#162c4a gui=NONE
hi DiffText ctermfg=188 ctermbg=24 cterm=bold guifg=#dde6cf guibg=#204a87 gui=bold
hi ErrorMsg ctermfg=188 ctermbg=53 cterm=NONE guifg=#dde6cf guibg=#5f0047 gui=NONE
hi WarningMsg ctermfg=188 ctermbg=53 cterm=NONE guifg=#dde6cf guibg=#5f0047 gui=NONE
hi Float ctermfg=137 ctermbg=NONE cterm=NONE guifg=#a8885a guibg=NONE gui=NONE
hi Function ctermfg=67 ctermbg=NONE cterm=NONE guifg=#6078bf guibg=NONE gui=NONE
hi Identifier ctermfg=143 ctermbg=NONE cterm=NONE guifg=#9ebf60 guibg=NONE gui=NONE
hi Keyword ctermfg=65 ctermbg=NONE cterm=NONE guifg=#728059 guibg=NONE gui=NONE
hi Label ctermfg=96 ctermbg=NONE cterm=NONE guifg=#805978 guibg=NONE gui=NONE
hi NonText ctermfg=238 ctermbg=233 cterm=NONE guifg=#404040 guibg=#171817 gui=NONE
hi Number ctermfg=137 ctermbg=NONE cterm=NONE guifg=#a8885a guibg=NONE gui=NONE
hi Operator ctermfg=NONE ctermbg=NONE cterm=NONE guifg=NONE guibg=NONE gui=NONE
hi PreProc ctermfg=65 ctermbg=NONE cterm=NONE guifg=#728059 guibg=NONE gui=NONE
hi Special ctermfg=188 ctermbg=NONE cterm=NONE guifg=#dde6cf guibg=NONE gui=NONE
hi SpecialKey ctermfg=238 ctermbg=16 cterm=NONE guifg=#404040 guibg=#222320 gui=NONE
hi Statement ctermfg=65 ctermbg=NONE cterm=NONE guifg=#728059 guibg=NONE gui=NONE
hi StorageClass ctermfg=143 ctermbg=NONE cterm=NONE guifg=#9ebf60 guibg=NONE gui=NONE
hi String ctermfg=96 ctermbg=NONE cterm=NONE guifg=#805978 guibg=NONE gui=NONE
hi Tag ctermfg=67 ctermbg=NONE cterm=NONE guifg=#6078bf guibg=NONE gui=NONE
hi Title ctermfg=188 ctermbg=NONE cterm=bold guifg=#dde6cf guibg=NONE gui=bold
hi Todo ctermfg=59 ctermbg=NONE cterm=inverse,bold guifg=#473c45 guibg=NONE gui=inverse,bold
hi Type ctermfg=67 ctermbg=NONE cterm=NONE guifg=#6078bf guibg=NONE gui=NONE
hi Underlined ctermfg=NONE ctermbg=NONE cterm=underline guifg=NONE guibg=NONE gui=underline
hi rubyClass ctermfg=65 ctermbg=NONE cterm=NONE guifg=#728059 guibg=NONE gui=NONE
hi rubyFunction ctermfg=67 ctermbg=NONE cterm=NONE guifg=#6078bf guibg=NONE gui=NONE
hi rubyInterpolationDelimiter ctermfg=NONE ctermbg=NONE cterm=NONE guifg=NONE guibg=NONE gui=NONE
hi rubySymbol ctermfg=137 ctermbg=NONE cterm=NONE guifg=#a8885a guibg=NONE gui=NONE
hi rubyConstant ctermfg=95 ctermbg=NONE cterm=NONE guifg=#8a4b66 guibg=NONE gui=NONE
hi rubyStringDelimiter ctermfg=96 ctermbg=NONE cterm=NONE guifg=#805978 guibg=NONE gui=NONE
hi rubyBlockParameter ctermfg=60 ctermbg=NONE cterm=NONE guifg=#596380 guibg=NONE gui=NONE
hi rubyInstanceVariable ctermfg=NONE ctermbg=NONE cterm=NONE guifg=NONE guibg=NONE gui=NONE
hi rubyInclude ctermfg=65 ctermbg=NONE cterm=NONE guifg=#728059 guibg=NONE gui=NONE
hi rubyGlobalVariable ctermfg=60 ctermbg=NONE cterm=NONE guifg=#596380 guibg=NONE gui=NONE
hi rubyRegexp ctermfg=96 ctermbg=NONE cterm=NONE guifg=#805978 guibg=NONE gui=NONE
hi rubyRegexpDelimiter ctermfg=96 ctermbg=NONE cterm=NONE guifg=#805978 guibg=NONE gui=NONE
hi rubyEscape ctermfg=137 ctermbg=NONE cterm=NONE guifg=#a8885a guibg=NONE gui=NONE
hi rubyControl ctermfg=65 ctermbg=NONE cterm=NONE guifg=#728059 guibg=NONE gui=NONE
hi rubyClassVariable ctermfg=NONE ctermbg=NONE cterm=NONE guifg=NONE guibg=NONE gui=NONE
hi rubyOperator ctermfg=NONE ctermbg=NONE cterm=NONE guifg=NONE guibg=NONE gui=NONE
hi rubyException ctermfg=65 ctermbg=NONE cterm=NONE guifg=#728059 guibg=NONE gui=NONE
hi rubyPseudoVariable ctermfg=NONE ctermbg=NONE cterm=NONE guifg=NONE guibg=NONE gui=NONE
hi rubyRailsUserClass ctermfg=95 ctermbg=NONE cterm=NONE guifg=#8a4b66 guibg=NONE gui=NONE
hi rubyRailsARAssociationMethod ctermfg=95 ctermbg=NONE cterm=NONE guifg=#8a4b66 guibg=NONE gui=NONE
hi rubyRailsARMethod ctermfg=95 ctermbg=NONE cterm=NONE guifg=#8a4b66 guibg=NONE gui=NONE
hi rubyRailsRenderMethod ctermfg=95 ctermbg=NONE cterm=NONE guifg=#8a4b66 guibg=NONE gui=NONE
hi rubyRailsMethod ctermfg=95 ctermbg=NONE cterm=NONE guifg=#8a4b66 guibg=NONE gui=NONE
hi erubyDelimiter ctermfg=NONE ctermbg=NONE cterm=NONE guifg=NONE guibg=NONE gui=NONE
hi erubyComment ctermfg=59 ctermbg=NONE cterm=NONE guifg=#473c45 guibg=NONE gui=NONE
hi erubyRailsMethod ctermfg=95 ctermbg=NONE cterm=NONE guifg=#8a4b66 guibg=NONE gui=NONE
hi htmlTag ctermfg=67 ctermbg=NONE cterm=NONE guifg=#6078bf guibg=NONE gui=NONE
hi htmlEndTag ctermfg=67 ctermbg=NONE cterm=NONE guifg=#6078bf guibg=NONE gui=NONE
hi htmlTagName ctermfg=67 ctermbg=NONE cterm=NONE guifg=#6078bf guibg=NONE gui=NONE
hi htmlArg ctermfg=67 ctermbg=NONE cterm=NONE guifg=#6078bf guibg=NONE gui=NONE
hi htmlSpecialChar ctermfg=137 ctermbg=NONE cterm=NONE guifg=#a8885a guibg=NONE gui=NONE
hi javaScriptFunction ctermfg=143 ctermbg=NONE cterm=NONE guifg=#9ebf60 guibg=NONE gui=NONE
hi javaScriptRailsFunction ctermfg=95 ctermbg=NONE cterm=NONE guifg=#8a4b66 guibg=NONE gui=NONE
hi javaScriptBraces ctermfg=NONE ctermbg=NONE cterm=NONE guifg=NONE guibg=NONE gui=NONE
hi yamlKey ctermfg=67 ctermbg=NONE cterm=NONE guifg=#6078bf guibg=NONE gui=NONE
hi yamlAnchor ctermfg=60 ctermbg=NONE cterm=NONE guifg=#596380 guibg=NONE gui=NONE
hi yamlAlias ctermfg=60 ctermbg=NONE cterm=NONE guifg=#596380 guibg=NONE gui=NONE
hi yamlDocumentHeader ctermfg=96 ctermbg=NONE cterm=NONE guifg=#805978 guibg=NONE gui=NONE
hi cssURL ctermfg=60 ctermbg=NONE cterm=NONE guifg=#596380 guibg=NONE gui=NONE
hi cssFunctionName ctermfg=95 ctermbg=NONE cterm=NONE guifg=#8a4b66 guibg=NONE gui=NONE
hi cssColor ctermfg=137 ctermbg=NONE cterm=NONE guifg=#a8885a guibg=NONE gui=NONE
hi cssPseudoClassId ctermfg=67 ctermbg=NONE cterm=NONE guifg=#6078bf guibg=NONE gui=NONE
hi cssClassName ctermfg=67 ctermbg=NONE cterm=NONE guifg=#6078bf guibg=NONE gui=NONE
hi cssValueLength ctermfg=137 ctermbg=NONE cterm=NONE guifg=#a8885a guibg=NONE gui=NONE
hi cssCommonAttr ctermfg=95 ctermbg=NONE cterm=NONE guifg=#8a4b66 guibg=NONE gui=NONE
hi cssBraces ctermfg=NONE ctermbg=NONE cterm=NONE guifg=NONE guibg=NONE gui=NONE