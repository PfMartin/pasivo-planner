#!/bin/bash

CURRENT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"
PLUGIN_DIR="$CURRENT_DIR/wordpress/html/wp-content/plugins/finance-planner"

function setupDirectory {
  if [ ! -d $1 ]; then
    echo "Creating scripts dir at: $1"
    sudo mkdir -p $1
  fi

  echo "Directory is ready: $1"
}

# Setup directories
setupDirectory $PLUGIN_DIR

echo ""

echo "Copying files"
sudo cp -r $CURRENT_DIR/app/dist $PLUGIN_DIR
sudo rm -f $PLUGIN_DIR/dist/assets/finance-planner.js
sudo rm -f $PLUGIN_DIR/dist/assets/finance-planner-style.css
sudo mv $PLUGIN_DIR/dist/assets/*.js $PLUGIN_DIR/dist/assets/finance-planner.js
sudo mv $PLUGIN_DIR/dist/assets/style*.css $PLUGIN_DIR/dist/assets/finance-planner-style.css
echo "Files are ready"

echo ""

echo "Done."