#!/bin/bash
set -e

root=$(pwd)
changed=$( lerna changed -p --toposort -l)

lerna version --no-push --yes

for i in $changed;
do
echo $i
  library="$(echo $i | cut -d':' -f2)"
  directory="$(echo $i | cut -d':' -f1)"
  version="$(echo $i | cut -d':' -f3)"
  # library=$( basename $i )
  # directory="$root/$library"
  cd $directory
  npm publish
done

git add .
git commit --amend --no-edit

git push --tags

for i in $changed;
do
  # library=$( basename $i )
  # directory="$root/$library"
  directory="$(echo $i | cut -d':' -f1)"
  cd $directory
  yarn ci:postpublish
done

