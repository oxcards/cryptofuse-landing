# CryptoFuse Cloudflare Pages Deployment Guide

This document provides instructions for deploying the CryptoFuse application to Cloudflare Pages.

## Quick Deployment

To deploy the application:

```bash
npm run deploy
```

This will:
1. Clean build directories
2. Build the Next.js application
3. Deploy to Cloudflare Pages

## Required Credentials

You'll need:
- **Cloudflare Account ID** - Found in your Cloudflare dashboard URL
- **API Token** - Generate from Cloudflare dashboard with Pages:Edit permissions

The script will prompt for these credentials if not found in your `.env.local` file.

## Storing Credentials

For convenience, you can store your credentials in `.env.local`:

```
CF_ACCOUNT_ID=your-account-id
CF_API_TOKEN=your-api-token
```

## GitLab CI/CD Deployment

For automated deployments, add these variables in GitLab CI/CD settings:

1. Go to your GitLab project → Settings → CI/CD → Variables
2. Add:
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
   - `CF_PROJECT_NAME`: cryptofuse (or your custom project name)

## Troubleshooting

If you encounter issues:

1. Verify your Cloudflare Account ID and API Token
2. Ensure your API Token has Pages:Edit permissions
3. Check that your Cloudflare Pages project exists
4. Try cleaning the build directories manually:
   ```bash
   rm -rf .next out
   ```
5. If wrangler command fails, try reinstalling:
   ```bash
   npm install -D wrangler
   ```

## Manual Cloudflare Pages Setup

If this is your first deployment:

1. Go to Cloudflare Dashboard → Pages
2. Create a new project named "cryptofuse"
3. Choose "Direct Upload" for the initial setup
4. After the project is created, you can use the deployment script
