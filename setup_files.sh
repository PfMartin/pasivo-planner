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
sudo cp -r $CURRENT_DIR/wp-vue/dist $PLUGIN_DIR
# sudo rm -f $PLUGIN_DIR/dist/finance-planner.js
# sudo mv $PLUGIN_DIR/dist/*js $PLUGIN_DIR/dist/assets/finance-planner.js
echo "Files are ready"

echo ""

echo "Done."