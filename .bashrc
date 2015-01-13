# Add `~/bin` to the `$PATH`
export PATH="$HOME/bin:$PATH";

# Load the shell dotfiles, and then some:
for file in ~/.{aliases,bash_prompt,exports,functions,extra}; do
    [ -r "$file" ] && [ -f "$file" ] && source "$file";
done;

# auto complete git
if [ -f ~/.git-completion.bash ]; then
    . ~/.git-completion.bash
fi

# Case-insensitive globbing (used in pathname expansion)
shopt -s nocaseglob;

# Autocorrect typos in path names when using `cd`
shopt -s cdspell;

# Add tab completion for many Bash commands
if which brew > /dev/null && [ -f "$(brew --prefix)/etc/bash_completion" ]; then
  source "$(brew --prefix)/etc/bash_completion";
elif [ -f /etc/bash_completion ]; then
  source /etc/bash_completion;
fi;

# Add tab completion for SSH hostnames based on ~/.ssh/config, ignoring wildcards
[ -e "$HOME/.ssh/config" ] && complete -o "default" -o "nospace" -W "$(grep "^Host" ~/.ssh/config | grep -v "[?*]" | cut -d " " -f2- | tr ' ' '\n')" scp sftp ssh;

# Setting PATH for Python 2.7
# The orginal version is saved in .bash_profile.pysave
PATH="/Library/Frameworks/Python.framework/Versions/2.7/bin:${PATH}"
export PATH
# set path for android studio
export PATH=${PATH}:~/Documents/adt-bundle-mac-x86_64-20140702/sdk/platform-tools:~/Documents/adt-bundle-mac-x86_64-20140702/sdk/tools
# Added by the Heroku Toolbelt
export PATH="/usr/local/heroku/bin:$PATH"
# add path for flow
PATH="$PATH:/Users/karan/Documents/flow/"
