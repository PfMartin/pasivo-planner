#!/bin/bash

CURRENT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"

zip -r hello-world-plugin.zip ./hello-world-plugin/*