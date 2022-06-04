#!/usr/bin/env bash

cd "$(dirname "${BASH_SOURCE}")";

function doIt() {
  rsync \
    --exclude ".git/" \
    --exclude ".DS_Store" \
    --exclude "*.sh" \
    --exclude "brew.list" \
    --exclude "LICENSE" \
    --exclude "README.md" \
    -avh --no-perms . ~;

  echo "Setting mac defaults..."
  ./mac-defaults.sh

  echo "Installing brew packages..."
  ./brew.sh
  source ~/.bash_profile;
}

if [ "$1" == "--force" -o "$1" == "-f" ]; then
  doIt;
else
  read -p "This may overwrite existing files in your home directory. Are you sure? (y/n) " -n 1;
  echo "";
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    doIt;
  fi;
fi;
unset doIt;
