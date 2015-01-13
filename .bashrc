BASH_COMPLETION="${BASH_COMPLETION:-/etc/bash_completion}"

# Load the shell dotfiles, and then some:
for file in ~/.{aliases}; do
    [ -r "$file" ] && [ -f "$file" ] && source "$file";
done;

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

# Added by the Heroku Toolbelt
export PATH="/usr/local/heroku/bin:$PATH"

PATH="$PATH:/Users/karan/Documents/flow/"
