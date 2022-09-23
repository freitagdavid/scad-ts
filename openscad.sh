#!/bin/sh

brew list --cask | grep openscad > /dev/null

if [ "$?" == "1" ]
then
  brew install --cask openscad
fi

# version=$(brew info --json=v2 --cask openscad | jq '.casks[0].installed' -r)
location=$(brew info openscad | head -n 3 | tail -n 1 | awk '{print $1}')
binary="$location/OpenSCAD.app/Contents/MacOS/OpenSCAD"

$binary "$@"
