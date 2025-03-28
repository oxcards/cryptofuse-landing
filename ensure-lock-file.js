#!/usr/bin/env node

/**
 * This script ensures that package-lock.json exists and is not ignored by Git
 * It's designed to be run before committing changes to the repository
 */

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// Get the root directory of the project
const projectRoot = __dirname;

// Check if package-lock.json exists
const packageLockPath = path.join(projectRoot, 'package-lock.json');
let packageLockExists = fs.existsSync(packageLockPath);

// If package-lock.json doesn't exist, create it
if (!packageLockExists) {
  console.log('package-lock.json not found. Generating...');
  try {
    execSync('npm install --package-lock-only', { stdio: 'inherit' });
    packageLockExists = fs.existsSync(packageLockPath);
    if (packageLockExists) {
      console.log('package-lock.json generated successfully.');
    } else {
      console.error('Failed to generate package-lock.json!');
      process.exit(1);
    }
  } catch (error) {
    console.error('Error generating package-lock.json:', error.message);
    process.exit(1);
  }
}

// Check if package-lock.json is ignored by Git
try {
  const gitCheck = execSync('git check-ignore -v package-lock.json 2>&1 || echo "Not ignored"', { encoding: 'utf8' });
  
  if (!gitCheck.includes('Not ignored')) {
    console.log('package-lock.json is being ignored by Git. Fixing...');
    
    // Add it explicitly with force
    execSync('git add -f package-lock.json', { stdio: 'inherit' });
    console.log('package-lock.json forced to be tracked by Git.');
  } else {
    console.log('package-lock.json is properly tracked by Git.');
  }
} catch (error) {
  console.error('Error checking Git status:', error.message);
}

console.log('Lock file check completed.');
