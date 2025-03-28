# GitHub Actions Deployment for Cloudflare Pages

This project is configured to automatically deploy to Cloudflare Pages whenever changes are pushed to the GitHub repository.

## How It Works

The automatic deployment uses GitHub Actions workflows to:
1. Build the Next.js application
2. Deploy the output to Cloudflare Pages
3. Create different deployment environments for production (main branch) and previews (pull requests)

## Setup Instructions

To enable automatic deployments, follow these steps:

### 1. Set up GitHub Repository Secrets

You need to add the following secrets to your GitHub repository:

1. Go to your GitHub repository → Settings → Secrets and variables → Actions
2. Click "New repository secret" and add the following secrets:
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID
   - `CLOUDFLARE_API_TOKEN`: API token with Cloudflare Pages access

### 2. Create Your Cloudflare API Token

To create the required API token:

1. Go to the Cloudflare dashboard → Profile → API Tokens
2. Click "Create Token"
3. Select "Create Custom Token"
4. Name it something like "GitHub Actions Cloudflare Pages"
5. Add the following permissions:
   - Account > Cloudflare Pages > Edit
   - Account > Account Settings > Read
6. Set appropriate Zone Resources (as needed)
7. Create the token and copy it to GitHub Secrets

### 3. Initial Setup on Cloudflare (First Time Only)

Before your first GitHub Actions deployment, create the Pages project on Cloudflare:

1. Go to Cloudflare Dashboard → Pages
2. Click "Create a project" → "Direct Upload"
3. Set the project name to match your `projectName` in the workflow file (default: cryptofuse)
4. Upload any placeholder files for the initial setup
5. After the initial project is created, GitHub Actions will handle all future deployments

## How the Deployment Process Works

The GitHub Actions workflow will:

1. Trigger whenever you push to the main branch or create/update a pull request
2. Install dependencies and build your Next.js application
3. Deploy to Cloudflare Pages automatically
4. Create different deployment URLs:
   - Production (main branch): `https://cryptofuse.pages.dev`
   - Preview (pull requests): `https://<deployment-id>.cryptofuse.pages.dev`

## Testing Your Setup

After setting up the secrets, you can verify everything works by:

1. Making a small change to your repository
2. Pushing the change to GitHub
3. Checking the "Actions" tab in your GitHub repository
4. Viewing the workflow run to ensure it completes successfully

## Troubleshooting

If you encounter issues with deployments:

1. Check the GitHub Actions logs for specific error messages
2. Verify your Cloudflare API token has the correct permissions
3. Ensure your Cloudflare Account ID is correct
4. Check that your Next.js build is successful
5. Verify the Cloudflare Pages project exists with the same name as in the workflow

## Manual Deployment (Fallback)

If needed, you can still deploy manually using:

```bash
npm run deploy
```
