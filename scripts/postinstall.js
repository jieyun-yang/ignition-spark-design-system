#!/usr/bin/env node

/**
 * Postinstall script for ignition-spark-design-system
 * Copies CLAUDE.md to the consumer project root for AI-assisted development
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find the consumer project root (where npm install was run)
// This is typically 3 levels up from node_modules/ignition-spark-design-system/scripts/
function findProjectRoot() {
  let current = process.cwd();

  // If we're in node_modules, go up to find project root
  if (current.includes('node_modules')) {
    const parts = current.split('node_modules');
    return parts[0].replace(/[/\\]$/, '');
  }

  // Otherwise use INIT_CWD (where npm install was run)
  return process.env.INIT_CWD || current;
}

function main() {
  const projectRoot = findProjectRoot();
  const sourcePath = path.join(__dirname, 'CLAUDE.template.md');
  const destPath = path.join(projectRoot, 'CLAUDE.md');

  // Don't overwrite if CLAUDE.md already exists
  if (fs.existsSync(destPath)) {
    console.log('  CLAUDE.md already exists in project root, skipping...');
    return;
  }

  // Don't run if we're in the design system repo itself
  if (fs.existsSync(path.join(projectRoot, 'design-system', 'index.ts'))) {
    return;
  }

  try {
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
      console.log('');
      console.log('  ✓ Created CLAUDE.md with AI prototyping guidelines');
      console.log('');
    }
  } catch (error) {
    // Silently fail - postinstall should not break npm install
  }
}

main();
