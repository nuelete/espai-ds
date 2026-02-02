# Push Espai Design System Library to GitHub

## Quick Commands

```bash
# 1. Check what's new/changed
git status

# 2. Add all the library files
git add library/
git add *.md

# 3. Commit with a descriptive message
git commit -m "Add shareable component library package

- Created complete npm package in /library folder
- Includes 12 production components + helpers
- Full TypeScript support with type definitions
- Comprehensive documentation (8 guides)
- Ready to publish to npm/GitHub Packages
- Design tokens and CSS variables included"

# 4. Push to GitHub
git push origin main
```

## If You Get Errors

### If branch is named 'master' instead of 'main':
```bash
git push origin master
```

### If you need to set upstream:
```bash
git push -u origin main
```

### If you have uncommitted changes in other files:
```bash
# See what else changed
git status

# Add everything
git add .

# Or add selectively
git add library/
git add README_LIBRARY.md SHARING_OPTIONS.md WHAT_WAS_CREATED.md LIBRARY_SUMMARY.md

# Then commit and push
git commit -m "Add shareable component library"
git push
```

## Verify on GitHub

After pushing, check:
1. Go to your GitHub repository
2. You should see the `/library` folder
3. All markdown guides should be visible
4. The commit message should appear

## Next Steps After Pushing

### Option 1: Publish from GitHub
You can now publish directly from your repository using GitHub Packages.

### Option 2: Set Up GitHub Actions
Create automated publishing when you create releases.

### Option 3: Share Repository Link
Others can clone and use: `git clone [your-repo-url]`

## Recommended Folder Structure on GitHub

```
your-repo/
├── src/                    # Original design system showcase
├── library/                # NEW: Shareable package
├── README.md              # Original project readme
├── README_LIBRARY.md      # Library overview
├── SHARING_OPTIONS.md     # How to share
└── [other guide files]
```

## Create a Release (Optional but Recommended)

After pushing, create a release on GitHub:

1. Go to your repo on GitHub
2. Click "Releases" → "Create a new release"
3. Tag: `v1.0.0`
4. Title: "Espai Design System v1.0.0"
5. Description: 
   ```
   Initial release of the Espai Design System component library.
   
   Features:
   - 12 production-ready React components
   - Full TypeScript support
   - Design tokens and CSS variables
   - Comprehensive documentation
   
   Installation:
   `npm install @espai/design-system`
   ```

This makes it easy to track versions and trigger automated publishing!
