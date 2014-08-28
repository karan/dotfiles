#if [[ ! $TERM =~ screen ]]; then
#    exec tmux
#fi

#BASH_COMPLETION="~/Documents/bash_completion"
BASH_COMPLETION="${BASH_COMPLETION:-/etc/bash_completion}"



alias tmux="TERM=screen-256color-bce tmux"
