# How to Deploy to GitHub Pages

Since your repository is named `Website` (e.g., `https://github.com/jenishb17/Website`), your site will be published at `https://jenishb17.github.io/Website/`.

I have already configured your project for this path:
- **vite.config.ts**: Added `base: "/Website/"`
- **App.tsx**: Added `basename="/Website"` to the router
- **package.json**: Added `homepage` URL

## 🚀 Easy Deployment (Recommended)

1. **Install the `gh-pages` tool**:
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Add deploy scripts** to your `package.json`:
   Add these lines to the `"scripts"` section:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Deploy!**
   Run this command in your terminal:
   ```bash
   npm run deploy
   ```

## ⚠️ Important Note
Because we changed the `base` path to `/Website/`, **local development** (`npm run dev`) might feel slightly different if you manually type URLs.
- The site will still work at `http://localhost:8080/Website/`
- If you see a blank page at `http://localhost:8080/`, just navigate to `/Website/`.

## ✅ Verify on GitHub
After running `npm run deploy`:
1. Go to your repo settings on GitHub.
2. Click **Pages** on the left sidebar.
3. Ensure **Source** is set to `gh-pages` branch.
4. Your site should be live in a few minutes!
