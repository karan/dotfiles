#if [[ ! $TERM =~ screen ]]; then
#    exec tmux
#fi

alias tmux="TERM=screen-256color-bce tmux"
