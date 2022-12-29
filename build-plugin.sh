#!/bin/bash

function setupDirectory {
  if [ ! -d $1 ]; then
    echo "Creating scripts dir at: $1"
    mkdir -p $1
  fi

  echo "Directory is ready: $1"
}

FILE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"
APP_DIR="${FILE_DIR}/app/src/finance-planner.php"

BUILD_DIR="${FILE_DIR}/app/dist/assets"
PACKAGE_DIR="${FILE_DIR}/package"

setupDirectory $PACKAGE_DIR

echo "Copying files"
cp $BUILD_DIR/*.js $PACKAGE_DIR/finance-planner.js
cp $BUILD_DIR/*.css $PACKAGE_DIR/finance-planner-style.css
cp $FILE_DIR/app/src/finance-planner.php $PACKAGE_DIR/finance-planner.php
echo "Done copying files"

echo " "

echo "Creating zip archive"
cd $PACKAGE_DIR
zip -r ../finance-planner.zip *
cd $FILE_DIR

echo " "

echo "Removing package directory"
rm -rf $PACKAGE_DIR
echo "Done removing package directory"