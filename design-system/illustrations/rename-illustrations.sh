#!/bin/bash

# Script to rename Figma-exported SVG files to PascalCase format
# Usage: ./rename-illustrations.sh

echo "Renaming illustration files..."

# Find all SVG files and rename them
find . -name "*.svg" -type f | while read file; do
  # Get directory and filename
  dir=$(dirname "$file")
  filename=$(basename "$file")

  # Extract the description from the Figma format
  # Format: "Category=XXX, Description=YYY, Size=800x400.svg"
  description=$(echo "$filename" | sed -n 's/.*Description=\([^,]*\).*/\1/p')

  if [ -n "$description" ]; then
    # Create new filename: Description.svg
    newname="${description}.svg"
    newpath="${dir}/${newname}"

    # Only rename if the new name is different
    if [ "$file" != "$newpath" ]; then
      echo "  $filename -> $newname"
      mv "$file" "$newpath"
    fi
  fi
done

echo "Done!"
