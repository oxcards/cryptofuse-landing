#!/usr/bin/env node

const { execSync } = require('child_process');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

// Initialize readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=== CryptoFuse Cloudflare Pages Deployment ===');

// Get Cloudflare credentials
async function getCredentials() {
  // Try to get credentials from .env.local
  try {
    if (fs.existsSync(path.join(__dirname, '.env.local'))) {
      const envContent = fs.readFileSync(path.join(__dirname, '.env.local'), 'utf8');
      const accountIdMatch = envContent.match(/CF_ACCOUNT_ID=([^\r\n]+)/);
      const apiTokenMatch = envContent.match(/CF_API_TOKEN=([^\r\n]+)/);
      
      if (accountIdMatch && accountIdMatch[1] && apiTokenMatch && apiTokenMatch[1]) {
        console.log('Found Cloudflare credentials in .env.local');
        
        return {
          accountId: accountIdMatch[1].trim(),
          apiToken: apiTokenMatch[1].trim(),
          projectName: 'cryptofuse'
        };
      }
    }
  } catch (error) {
    console.log('Error reading .env.local:', error.message);
  }

  // Prompt for credentials
  return new Promise((resolve) => {
    rl.question('Enter Cloudflare Account ID: ', (accountId) => {
      if (!accountId) {
        console.log('Deployment cancelled.');
        rl.close();
        process.exit(0);
      }
      
      rl.question('Enter API Token: ', (apiToken) => {
        if (!apiToken) {
          console.log('Deployment cancelled.');
          rl.close();
          process.exit(0);
        }
        
        rl.question('Enter project name (default: cryptofuse): ', (projectName) => {
          resolve({
            accountId,
            apiToken,
            projectName: projectName || 'cryptofuse'
          });
        });
      });
    });
  });
}

// Clean build directories
function cleanBuild() {
  console.log('Cleaning previous build files...');
  try {
    if (fs.existsSync(path.join(__dirname, '.next'))) {
      execSync('rm -rf .next', { stdio: 'inherit' });
    }
    if (fs.existsSync(path.join(__dirname, 'out'))) {
      execSync('rm -rf out', { stdio: 'inherit' });
    }
    console.log('Build directories cleaned.');
  } catch (error) {
    console.error('Error cleaning build directories:', error.message);
  }
}

// Deploy to Cloudflare Pages
async function deploy() {
  try {
    // Get credentials
    const credentials = await getCredentials();
    
    // Set environment variables
    const env = {
      ...process.env,
      CLOUDFLARE_ACCOUNT_ID: credentials.accountId,
      CLOUDFLARE_API_TOKEN: credentials.apiToken
    };
    
    // Clean build directories
    cleanBuild();
    
    // Build the project
    console.log('Building project...');
    execSync('npm run build', { stdio: 'inherit' });
    
    // Deploy to Cloudflare Pages
    console.log(`Deploying to Cloudflare Pages...`);
    execSync(`npx wrangler pages deploy out --project-name=${credentials.projectName}`, {
      env,
      stdio: 'inherit'
    });
    
    console.log('\n✅ Deployment completed successfully!');
    
    // Suggest storing credentials in .env.local
    rl.question('Would you like to save these credentials to .env.local for future deployments? (y/N): ', (answer) => {
      if (answer.toLowerCase() === 'y') {
        try {
          if (!fs.existsSync(path.join(__dirname, '.env.local'))) {
            fs.writeFileSync(path.join(__dirname, '.env.local'), '');
          }
          
          const envContent = fs.readFileSync(path.join(__dirname, '.env.local'), 'utf8');
          let newContent = envContent;
          
          // Update or add CF_ACCOUNT_ID
          if (envContent.includes('CF_ACCOUNT_ID=')) {
            newContent = newContent.replace(/CF_ACCOUNT_ID=([^\r\n]+)/, `CF_ACCOUNT_ID=${credentials.accountId}`);
          } else {
            newContent += `\nCF_ACCOUNT_ID=${credentials.accountId}`;
          }
          
          // Update or add CF_API_TOKEN
          if (envContent.includes('CF_API_TOKEN=')) {
            newContent = newContent.replace(/CF_API_TOKEN=([^\r\n]+)/, `CF_API_TOKEN=${credentials.apiToken}`);
          } else {
            newContent += `\nCF_API_TOKEN=${credentials.apiToken}`;
          }
          
          fs.writeFileSync(path.join(__dirname, '.env.local'), newContent);
          console.log('Credentials saved to .env.local');
        } catch (error) {
          console.error('Error saving credentials:', error.message);
        }
      }
      
      rl.close();
    });
  } catch (error) {
    console.error('\n❌ Error during deployment:', error.message);
    rl.close();
  }
}

// Main function
async function main() {
  // Check if wrangler is installed
  try {
    execSync('npx wrangler --version', { stdio: 'ignore' });
  } catch (error) {
    console.log('⚠️ Wrangler not found. Installing...');
    execSync('npm install -D wrangler', { stdio: 'inherit' });
  }
  
  // Start deployment
  await deploy();
}

// Run the main function
main();
