# Setting PATH for Python 2.7
# The orginal version is saved in .bash_profile.pysave
PATH="/Library/Frameworks/Python.framework/Versions/2.7/bin:${PATH}"
export PATH

export PATH=${PATH}:~/Documents/adt-bundle-mac-x86_64-20140702/sdk/platform-tools:~/Documents/adt-bundle-mac-x86_64-20140702/sdk/tools

# Coloring bash
export CLICOLOR=1
export LSCOLORS=GxFxCxDxBxegedabagaced
export PS1="\[\e[0;31m\]\u\[\e[m\]:\[\e[0;37m\]\W\[\e[m\]$ "

# setup path for virtualenvwrapper
export WORKON_HOME=~/Dropbox/Codebase/General/envs
source /usr/local/bin/virtualenvwrapper.sh

alias serve="python -m SimpleHTTPServer"

#ssh into uw cse servers as me
alias attu1="ssh kgoel@attu1.cs.washington.edu"
alias attu2="ssh kgoel@attu2.cs.washington.edu"
alias attu3="ssh kgoel@attu3.cs.washington.edu"
alias attu4="ssh kgoel@attu4.cs.washington.edu"
alias aeb="ssh kgoel@aeb.cs.washington.edu" # probably during dead week?
alias abelay="ssh kgoel@abelay.cs.washington.edu"
alias semanti="ssh kgoel@semanti.cs.washington.edu"
alias ananth="ssh kgoel@ananth.cs.washington.edu"
alias alistair="ssh kgoel@alistair.cs.washington.edu"
alias crope="ssh kgoel@crope.cs.washington.edu"

# cd into most used dirs
alias codebase="cd ~/Dropbox/Codebase"
alias uw="cd ~/Google\ Drive/UW"

# Added by the Heroku Toolbelt
export PATH="/usr/local/heroku/bin:$PATH"

alias subl="'/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl'"

# make a py3 virtual env
alias mkv3="mkvirtualenv -p /usr/local/bin/python3 $1"

# Print a tree representation of the current folder
#alias tree="ls -R | grep ":$" | sed -e 's/:$//' -e 's/[^-][^\/]*\//--/g' -e 's/^/   /' -e 's/-/|/'"

# Git aliases
alias gs="git status"
alias ga="git add -A :/"
alias gb="git branch"
alias gc="git commit -m "$1""
alias gp="git push $1 $2" # gp OR gp [remote] [branch]
alias pull="git pull"
alias gt="git tag "$1""
alias gtp="git push --tags"
alias pull="git pull"
alias co="git checkout"

# add all changes from working tree to stage, commit them with message and push them
function g() {
    git add -A :/;
    git commit -m "$1";
    git push;
}

alias chromex="open /Applications/Google\ Chrome.app --args --allow-file-access-from-files --disable-web-security"
#alias tmux="TERM=screen-256color-bce tmux"

alias tunnel="~/Documents/ngrok -authtoken aSj1MW5kY5LdU10Tc01p"

##
# Your previous /Users/karan/.bash_profile file was backed up as /Users/karan/.bash_profile.macports-saved_2014-07-13_at_08:53:55
##

# MacPorts Installer addition on 2014-07-13_at_08:53:55: adding an appropriate PATH variable for use with MacPorts.
export PATH="/opt/local/bin:/opt/local/sbin:$PATH"
# Finished adapting your PATH environment variable for use with MacPorts.

if [ -f ~/.git-completion.bash ]; then
    . ~/.git-completion.bash
fi

alias l="ls"
alias ll="ls -l"

# The next line updates PATH for the Google Cloud SDK.
source '/Users/karan/google-cloud-sdk/path.bash.inc'

# The next line enables bash completion for gcloud.
source '/Users/karan/google-cloud-sdk/completion.bash.inc'

# Pebble SDK
export PATH="/Users/karan/pebble-dev/PebbleSDK-current/bin:$PATH"
