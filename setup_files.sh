#!/bin/bash

CURRENT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"

TEMPLATE_DIR="$CURRENT_DIR/wordpress/html/wp-content/themes/twentytwentytwo/templates/"
SCRIPTS_DIR="$CURRENT_DIR/wordpress/html/wp-content/themes/twentytwentytwo/scripts/"
CSS_DIR="$CURRENT_DIR/wordpress/html/wp-content/themes/twentytwentytwo/css/"

function setupDirectory {
  if [ ! -d $1 ]; then
    echo "Creating scripts dir at: $1"
    sudo mkdir -p $1
  fi

  echo "Directory is ready: $1"
}

# Setup directories
setupDirectory $SCRIPTS_DIR
setupDirectory $CSS_DIR

echo ""

echo "Copying files"
sudo cp $CURRENT_DIR/app/src/app-template.html $TEMPLATE_DIR/finance-planner-app.html
sudo cp $CURRENT_DIR/app/dist/assets/*.js $SCRIPTS_DIR/finance-planner-app.js
sudo cp $CURRENT_DIR/app/dist/assets/*.css $CSS_DIR/finance-planner-style.css
echo "Files are ready"

echo ""

echo "Done."