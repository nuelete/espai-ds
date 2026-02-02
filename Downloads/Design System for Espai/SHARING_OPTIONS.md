# How to Share the Espai Design System

You have multiple options for sharing this design system across projects. Choose based on your needs:

## 🎯 Quick Comparison

| Method | Best For | Effort | Flexibility |
|--------|----------|--------|-------------|
| **npm Package** | Multiple projects, teams | Medium | High |
| **GitHub Packages** | Private, GitHub-based teams | Medium | High |
| **Copy Files** | Single project, quick start | Low | Medium |
| **Monorepo** | Multiple related projects | High | Highest |

---

## 1️⃣ npm Package (Recommended)

**Best for:** Sharing with multiple projects, public consumption, or team use

### Pros
- ✅ Easy to install: `npm install @espai/design-system`
- ✅ Version management built-in
- ✅ Can be public or private
- ✅ Works with any JavaScript project
- ✅ Automatic updates via `npm update`

### Cons
- ❌ Requires npm account
- ❌ Private packages require paid account
- ❌ Extra step to publish updates

### How To

1. **Prepare** (in `/library` folder):
   ```bash
   cd library
   npm install
   npm run build
   ```

2. **Publish**:
   ```bash
   npm login
   npm publish --access public
   ```

3. **Use in Projects**:
   ```bash
   npm install @espai/design-system
   ```

📖 **Full Guide:** See `/library/PUBLISHING.md`

---

## 2️⃣ GitHub Packages

**Best for:** Private teams using GitHub, enterprise scenarios

### Pros
- ✅ Free private packages
- ✅ Integrated with GitHub
- ✅ Access control via GitHub teams
- ✅ Same workflow as npm

### Cons
- ❌ Requires GitHub authentication to install
- ❌ Only works for GitHub users
- ❌ More setup for users

### How To

1. **Setup** (in `/library` folder):
   
   Create `.npmrc`:
   ```
   @your-org:registry=https://npm.pkg.github.com
   ```

   Update `package.json`:
   ```json
   {
     "name": "@your-org/espai-design-system",
     "publishConfig": {
       "registry": "https://npm.pkg.github.com"
     }
   }
   ```

2. **Publish**:
   ```bash
   npm login --registry=https://npm.pkg.github.com
   npm publish
   ```

3. **Use in Projects**:
   
   Users create `.npmrc`:
   ```
   @your-org:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
   ```

   Then install:
   ```bash
   npm install @your-org/espai-design-system
   ```

---

## 3️⃣ Copy Files Directly

**Best for:** Single project, prototyping, full control

### Pros
- ✅ No publishing required
- ✅ Complete control
- ✅ Easy to modify
- ✅ No version management needed

### Cons
- ❌ Manual updates across projects
- ❌ No central source of truth
- ❌ Can diverge across projects
- ❌ Larger project size

### How To

1. **Copy Components**:
   ```bash
   # In your project
   cp -r library/src/components src/components/espai
   cp library/src/styles.css src/styles/espai.css
   cp library/src/tokens.ts src/lib/espai-tokens.ts
   ```

2. **Import Directly**:
   ```tsx
   import '@/styles/espai.css';
   import { EspaiButton } from '@/components/espai/EspaiButton';
   ```

3. **Install Dependencies**:
   ```bash
   npm install lucide-react recharts clsx
   ```

---

## 4️⃣ Git Submodule

**Best for:** Keeping design system in sync across related projects

### Pros
- ✅ Stays in sync with main repo
- ✅ Easy to pull updates
- ✅ Can make changes locally
- ✅ No npm needed

### Cons
- ❌ Requires Git knowledge
- ❌ Can be complex to manage
- ❌ All projects must use Git

### How To

1. **Add as Submodule**:
   ```bash
   # In your project
   git submodule add https://github.com/your-org/espai-design-system.git lib/espai
   ```

2. **Initialize**:
   ```bash
   git submodule update --init --recursive
   ```

3. **Use**:
   ```tsx
   import { EspaiButton } from '@/lib/espai/library/src/components/EspaiButton';
   ```

4. **Update**:
   ```bash
   git submodule update --remote
   ```

---

## 5️⃣ Monorepo

**Best for:** Large organizations with many related projects

### Pros
- ✅ Single source of truth
- ✅ Easy to make cross-project changes
- ✅ Shared dependencies
- ✅ Coordinated releases

### Cons
- ❌ Complex setup
- ❌ Requires monorepo tools
- ❌ Learning curve

### How To

Use tools like:
- **Turborepo**: Fast, modern monorepo
- **Nx**: Powerful, feature-rich
- **Lerna**: Classic monorepo tool

Structure:
```
workspace/
├── packages/
│   ├── design-system/
│   │   └── [library contents]
│   ├── app-1/
│   └── app-2/
└── package.json
```

---

## 6️⃣ For Lovable/Bolt Projects

**Best for:** AI-driven development platforms

### Option A: Publish to npm First

1. Publish to npm (Method 1)
2. In Lovable, tell AI:
   ```
   Install @espai/design-system package and set it up
   ```

### Option B: Copy Essential Files

1. Copy these to Lovable project:
   - Core components you need
   - `styles.css`
   - `tokens.ts`

2. Ask AI to:
   ```
   Install lucide-react and recharts.
   Import the Espai styles in App.tsx.
   ```

---

## 📊 Decision Matrix

### Choose npm Package if you:
- Want to share with multiple projects
- Need version management
- Have or can create npm account
- Want easy installation

### Choose GitHub Packages if you:
- Need private sharing
- Already use GitHub
- Want access control
- Don't want to pay for npm private packages

### Choose Copy Files if you:
- Only have one project
- Want complete control
- Need to customize heavily
- Are prototyping

### Choose Monorepo if you:
- Have multiple related projects
- Want coordinated releases
- Have complex dependencies
- Need maximum flexibility

---

## 🚀 Recommended Approach

**For most cases:** Start with **npm Package** (Method 1)

Why?
1. Easy to set up
2. Easy for others to use
3. Proper version management
4. Can be public or private
5. Standard JavaScript ecosystem approach

Then if you need:
- **Privacy** → Switch to GitHub Packages
- **Heavy customization** → Fork and copy files
- **Many projects** → Consider monorepo later

---

## 📝 Next Steps

1. **Choose your method** from above
2. **Follow the specific guide**:
   - npm: `/library/PUBLISHING.md`
   - GitHub: GitHub Packages docs
   - Copy: Just copy the files!
3. **Test in a project**
4. **Share with your team**

---

## 💡 Pro Tips

1. **Start simple**: Begin with copying files, migrate to package later
2. **Document your choice**: Tell your team how to access the design system
3. **Set up automation**: Use GitHub Actions to auto-publish on release
4. **Version carefully**: Follow semantic versioning strictly

---

**Choose the approach that fits your team and workflow best!** 🎯

All files and guides are ready in the `/library` folder.
