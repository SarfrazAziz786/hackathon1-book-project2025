# Pushing Your Docusaurus Website to GitHub

To push your Docusaurus website to your GitHub account, follow these steps:

## Step 1: Create a New Repository on GitHub
1. Go to https://github.com/new
2. Choose a repository name (e.g., "book-project-website" or similar)
3. Select "Public" or "Private" as per your preference
4. Do NOT initialize with a README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 2: Copy the Repository URL
1. After creating the repository, you'll see a page with quick setup instructions
2. Copy the HTTPS URL (e.g., `https://github.com/username/book-project-website.git`)
   Or the SSH URL if you have SSH keys set up (e.g., `git@github.com:username/book-project-website.git`)

## Step 3: Add Remote Origin and Push
Run these commands in your terminal from the `my-website` directory:

```bash
git remote add origin <YOUR_REPOSITORY_URL>
git branch -M main
git push -u origin main
```

Replace `<YOUR_REPOSITORY_URL>` with the URL you copied in Step 2.

## Step 4: Verification
After pushing, verify that your files appear in the GitHub repository in your browser.

## Note About GitHub Pages
If you want to host your Docusaurus site using GitHub Pages:

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Create a `.github/workflows/deploy.yml` file with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm

      - name: Install dependencies
        run: npm ci
      - name: Build website
        run: npm run build

      - name: Deploy to GitHub Pages
        if: github.event_name == 'push'
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
          # The following lines assign commit authorship to the official 
          # GH-Actions bot for deploys to `gh-pages` branch.
          # https://github.com/actions/checkout/issues/13#issuecomment-724485440
          user_name: github-actions[bot]
          user_email: 41898282+github-actions[bot]@users.noreply.github.com
```

This workflow will automatically build and deploy your Docusaurus site whenever changes are pushed to the main branch.

## Alternative: Manual Deployment
If you prefer to deploy manually, you can build your site locally with:
```bash
npm run build
```

Then serve the contents of the `build` directory.