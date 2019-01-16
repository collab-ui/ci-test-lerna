#!/bin/bash
root=$(pwd)
changed=$( lerna changed -l)

lerna version --no-push --yes

for i in $changed;
do
# echo $i
  library=$( basename $i )
  # echo $library
  directory="$root/$library"
  cd $directory
  npm publish
  # echo $(pwd)
done

git add .
git commit --amend --no-edit

git push --tags

for i in $changed;
do
  library=$( basename $i )
  directory="$root/$library"
  cd $directory
  yarn ci:postpublish
done

