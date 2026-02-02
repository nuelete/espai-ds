# Publishing Guide for Espai Design System

This guide will walk you through publishing the Espai Design System as an npm package.

## Prerequisites

1. **Node.js and npm** - Make sure you have Node.js 18+ installed
2. **npm account** - Create one at [npmjs.com](https://www.npmjs.com/)
3. **Organization (optional)** - For scoped packages like `@your-org/espai-design-system`

## Step 1: Install Dependencies

```bash
cd library
npm install
```

## Step 2: Update package.json

Before publishing, update the package details in `package.json`:

```json
{
  "name": "@your-org/espai-design-system",  // Change to your org
  "version": "1.0.0",
  "author": "Your Organization",
  "repository": {
    "type": "git",
    "url": "https://github.com/your-org/espai-design-system.git"
  }
}
```

## Step 3: Build the Package

```bash
npm run build
```

This will:
- Compile TypeScript to JavaScript
- Generate type definitions (.d.ts files)
- Create both CommonJS and ESM builds
- Output everything to the `dist/` folder

## Step 4: Test Locally (Optional but Recommended)

Before publishing, test the package locally:

```bash
# In the library folder
npm link

# In your test project
npm link @your-org/espai-design-system
```

Then try importing and using the components in your test project.

## Step 5: Login to npm

```bash
npm login
```

Enter your npm username, password, and email.

## Step 6: Publish

### For Public Packages

```bash
npm publish --access public
```

### For Private Packages (requires paid npm account)

```bash
npm publish
```

### For Scoped Packages

If your package name starts with `@` (like `@your-org/espai-design-system`):

```bash
npm publish --access public
```

## Step 7: Verify Publication

Visit your package on npm:
```
https://www.npmjs.com/package/@your-org/espai-design-system
```

## Updating the Package

When you make changes and want to publish a new version:

### 1. Update the version

```bash
# For patch updates (1.0.0 -> 1.0.1)
npm version patch

# For minor updates (1.0.0 -> 1.1.0)
npm version minor

# For major updates (1.0.0 -> 2.0.0)
npm version major
```

### 2. Rebuild and publish

```bash
npm run build
npm publish
```

## Alternative: Publish to GitHub Packages

If you prefer to use GitHub Packages instead of npm:

### 1. Create `.npmrc` in library folder:

```
@your-org:registry=https://npm.pkg.github.com
```

### 2. Update package.json:

```json
{
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
}
```

### 3. Login to GitHub Packages:

```bash
npm login --registry=https://npm.pkg.github.com
# Username: your-github-username
# Password: your-github-personal-access-token
# Email: your-email
```

### 4. Publish:

```bash
npm publish
```

## Using the Published Package

### Installation

```bash
npm install @your-org/espai-design-system
```

### In your app:

```tsx
import '@espai/design-system/styles';
import { EspaiButton, EspaiCard } from '@espai/design-system';

function App() {
  return (
    <div>
      <EspaiCard 
        title="Revenue at Risk" 
        value="$847K" 
      />
      <EspaiButton>Take Action</EspaiButton>
    </div>
  );
}
```

## Troubleshooting

### Build Errors

If you get TypeScript errors during build:
```bash
npm install --save-dev typescript @types/react @types/react-dom
npm run build
```

### Permission Errors

If you get EPERM or EACCESS errors:
```bash
npm login
npm publish --access public
```

### Package Already Exists

If the package name is taken:
1. Use a scoped package: `@your-org/espai-design-system`
2. Choose a different name: `espai-design-system-pro`

## Best Practices

1. **Semantic Versioning**
   - MAJOR: Breaking changes
   - MINOR: New features (backward compatible)
   - PATCH: Bug fixes

2. **Changelog**
   - Keep a CHANGELOG.md documenting all changes

3. **Testing**
   - Always test locally before publishing
   - Consider setting up automated tests

4. **Documentation**
   - Keep README.md up to date
   - Include migration guides for breaking changes

## CI/CD Automation (Optional)

You can automate publishing with GitHub Actions:

Create `.github/workflows/publish.yml`:

```yaml
name: Publish Package

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: cd library && npm ci
      - run: cd library && npm run build
      - run: cd library && npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## Support

For questions or issues with publishing, refer to:
- [npm documentation](https://docs.npmjs.com/cli/v9/commands/npm-publish)
- [GitHub Packages documentation](https://docs.github.com/en/packages)

---

**Ready to share Espai with the world!** 🚀
