# Pre-Publishing Checklist

Use this checklist before publishing your Espai Design System package.

## ✅ Configuration

- [ ] Update `name` in `package.json` to your desired package name
  - For scoped: `@your-org/espai-design-system`
  - For unscoped: `espai-design-system-yourname`
  
- [ ] Update `version` in `package.json` (start with `1.0.0`)

- [ ] Update `author` in `package.json` with your name/org

- [ ] Update `repository.url` in `package.json` if using Git

- [ ] Update `description` in `package.json` if desired

## ✅ Build & Test

- [ ] Run `npm install` successfully
  ```bash
  cd library && npm install
  ```

- [ ] Run `npm run build` without errors
  ```bash
  npm run build
  ```

- [ ] Check that `dist/` folder was created with:
  - [ ] `index.js` (CommonJS)
  - [ ] `index.mjs` (ESM)
  - [ ] `index.d.ts` (TypeScript definitions)
  - [ ] All component files

- [ ] Test locally with `npm link`
  ```bash
  npm link
  # Then in test project: npm link @your-org/espai-design-system
  ```

- [ ] Verify imports work in test project:
  ```tsx
  import '@espai/design-system/styles';
  import { EspaiButton } from '@espai/design-system';
  ```

## ✅ Documentation

- [ ] README.md is complete and accurate

- [ ] Examples in README.md are tested and working

- [ ] QUICK_START.md has correct package name

- [ ] PUBLISHING.md is reviewed

## ✅ Package Contents

- [ ] `package.json` - Correct and complete
- [ ] `tsconfig.json` - Present
- [ ] `.npmignore` - Present (excludes src/, keeps dist/)
- [ ] `README.md` - Complete documentation
- [ ] `src/` folder - All source files
- [ ] `dist/` folder - Built files (after build)

## ✅ npm Account Setup

- [ ] npm account created at [npmjs.com](https://npmjs.com)
- [ ] Logged in with `npm login`
- [ ] Organization created (if using scoped package like `@org/package`)

## ✅ Final Checks Before Publishing

- [ ] Package name is available (search on [npmjs.com](https://www.npmjs.com/))
- [ ] Version number is correct
- [ ] All tests pass
- [ ] Documentation is up to date
- [ ] You're in the `library/` directory

## 🚀 Ready to Publish!

Run:
```bash
npm publish --access public
```

For scoped packages, the `--access public` flag is required unless you have a paid npm account.

## ✅ After Publishing

- [ ] Package appears on npm: `https://www.npmjs.com/package/@your-org/espai-design-system`
- [ ] Can install in new project: `npm install @your-org/espai-design-system`
- [ ] Components work in a fresh install
- [ ] Update your main project to use the published version

## 📝 For Future Updates

When making changes:

1. [ ] Make changes in `/library/src/`
2. [ ] Test locally
3. [ ] Update version:
   ```bash
   npm version patch  # or minor, or major
   ```
4. [ ] Build:
   ```bash
   npm run build
   ```
5. [ ] Publish:
   ```bash
   npm publish
   ```

## 🎯 Automation (Optional)

Consider setting up:
- [ ] GitHub Actions for automated publishing on release
- [ ] Automated testing with CI/CD
- [ ] Changelog automation
- [ ] Semantic release

---

**Once all boxes are checked, you're ready to share Espai with the world!** 🎉
