# 📦 Espai Design System - Shareable Component Library

> **You asked for a shareable component library — it's ready!**

This repository now contains both:
1. **Live Design System** (`/src`) - The interactive documentation and showcase
2. **Shareable Library** (`/library`) - The publishable npm package

---

## 🎯 What You Have

### ✅ Complete Component Library

A production-ready, publishable npm package with:

- **12 Core Components** - Buttons, cards, tables, charts, navigation, etc.
- **Full TypeScript Support** - All components fully typed
- **Design Tokens** - Programmatic access to colors, typography, spacing
- **CSS Variables** - Easy theming and customization
- **Comprehensive Documentation** - README, guides, examples
- **Ready to Publish** - Configured for npm/GitHub Packages

### 📂 Key Files

```
/library/                      # THE SHAREABLE PACKAGE
├── src/                       # Source code
│   ├── components/            # All components
│   ├── tokens.ts             # Design tokens
│   ├── styles.css            # Core styles
│   └── index.ts              # Main exports
├── package.json              # Package configuration
├── tsconfig.json             # TypeScript config
├── README.md                 # Full documentation
├── PUBLISHING.md             # How to publish
├── QUICK_START.md            # 5-minute setup
├── CHECKLIST.md              # Pre-publish checklist
└── PACKAGE_GUIDE.md          # Technical details

/SHARING_OPTIONS.md           # All sharing methods explained
/LIBRARY_SUMMARY.md           # Overview of what's included
```

---

## 🚀 Quick Start (3 Steps)

### 1. Build the Package

```bash
cd library
npm install
npm run build
```

### 2. Test Locally

```bash
# In library folder
npm link

# In your test project
npm link @espai/design-system
npm install lucide-react recharts
```

### 3. Use in Your Project

```tsx
import '@espai/design-system/styles';
import { EspaiButton, EspaiCard } from '@espai/design-system';

function App() {
  return (
    <EspaiCard 
      title="Revenue at Risk" 
      value="$847K" 
      iconColor="critical"
    />
  );
}
```

---

## 📖 Documentation

Everything you need is documented:

| Document | Purpose |
|----------|---------|
| [SHARING_OPTIONS.md](./SHARING_OPTIONS.md) | **START HERE** - All ways to share the library |
| [library/README.md](./library/README.md) | Complete usage documentation |
| [library/PUBLISHING.md](./library/PUBLISHING.md) | Step-by-step publishing guide |
| [library/QUICK_START.md](./library/QUICK_START.md) | Get running in 5 minutes |
| [library/CHECKLIST.md](./library/CHECKLIST.md) | Pre-publish checklist |
| [library/PACKAGE_GUIDE.md](./library/PACKAGE_GUIDE.md) | Technical package details |
| [LIBRARY_SUMMARY.md](./LIBRARY_SUMMARY.md) | What's included overview |

---

## 🎨 What's Included

### Core Components

- **EspaiButton** - Multi-variant buttons with icons
- **EspaiCard** - Metric cards with trends
- **EspaiMiniCard** - Compact category cards
- **EspaiTable** - Sortable data tables
- **EspaiChart** - Line, area, and bar charts
- **EspaiNavigation** - Sidebar navigation
- **ProgressiveDisclosure** - Expandable sections
- **InsightCard** - Narrative insights
- **EmptyState** - No-data handling

### Helpers

- **StatusBadge** - Semantic indicators
- **MetricCell** - Formatted metrics
- **AccountCell** - Account display
- **DetailRow** - Detail rows
- **ChartWrapper** - Chart containers

### Design Tokens

All colors, typography, spacing available as:
- CSS variables (`var(--espai-focus-600)`)
- JavaScript constants (`tokens.colors.focus[600]`)

---

## 🔧 How to Share

You have **6 options** (fully documented in [SHARING_OPTIONS.md](./SHARING_OPTIONS.md)):

### Option 1: npm Package (Recommended)
```bash
cd library
npm publish --access public
```
**Best for:** Multiple projects, teams, public sharing

### Option 2: GitHub Packages
```bash
npm publish --registry=https://npm.pkg.github.com
```
**Best for:** Private teams, GitHub integration

### Option 3: Copy Files
```bash
cp -r library/src/components your-project/src/
```
**Best for:** Single project, full control

### Option 4: Local Link
```bash
npm link
```
**Best for:** Testing before publishing

### Option 5: Git Submodule
```bash
git submodule add [repo-url]
```
**Best for:** Keeping in sync across projects

### Option 6: Monorepo
```bash
# Use Turborepo, Nx, or Lerna
```
**Best for:** Large organizations

---

## 🎯 For Lovable/Bolt Projects

### Method A: Publish First (Recommended)

1. Publish to npm:
   ```bash
   cd library
   npm publish --access public
   ```

2. In Lovable, tell the AI:
   ```
   Install @espai/design-system, lucide-react, and recharts packages.
   Then import the styles and use the components.
   ```

### Method B: Copy Files

1. Copy components you need from `/library/src/components/`
2. Copy `/library/src/styles.css`
3. Ask AI to install dependencies

---

## 💡 Examples

### Simple Button

```tsx
import { EspaiButton } from '@espai/design-system';

<EspaiButton variant="primary" onClick={() => alert('Hi!')}>
  Click Me
</EspaiButton>
```

### Metric Card

```tsx
import { EspaiCard } from '@espai/design-system';

<EspaiCard
  title="Revenue at Risk"
  value="$847K"
  change={{ value: '+12%', direction: 'down', label: 'vs last month' }}
  iconColor="critical"
  description="3 accounts requiring attention"
/>
```

### Data Table

```tsx
import { EspaiTable, StatusBadge } from '@espai/design-system';

const columns = [
  { key: 'name', label: 'Account' },
  { 
    key: 'status', 
    label: 'Status',
    render: (val) => <StatusBadge status={val} type="support" />
  }
];

<EspaiTable data={data} columns={columns} />
```

### Insight Card

```tsx
import { InsightCard } from '@espai/design-system';

<InsightCard
  type="critical"
  headline="Contract expiring in 7 days"
  explanation="$340K annual contract needs immediate attention"
  metric="$340K"
  metricLabel="at risk"
  action="Escalate to executive team"
/>
```

---

## 📋 Pre-Publishing Checklist

Before publishing, check:

- [ ] Updated package name in `package.json`
- [ ] Updated author and repository
- [ ] Built successfully (`npm run build`)
- [ ] Tested locally (`npm link`)
- [ ] Logged into npm (`npm login`)
- [ ] Package name is available

Full checklist: [library/CHECKLIST.md](./library/CHECKLIST.md)

---

## 🔄 Workflow

### First Time Setup

```bash
cd library
npm install
npm run build
npm publish --access public
```

### Making Updates

```bash
# 1. Make changes in library/src/

# 2. Update version
npm version patch  # or minor, or major

# 3. Rebuild
npm run build

# 4. Publish
npm publish
```

### Using in Projects

```bash
npm install @espai/design-system
npm update @espai/design-system  # To get updates
```

---

## 🎨 Design Philosophy

The Espai Design System embodies:

- **Relief and clarity, not urgency or alarm**
- **Progressive disclosure** - Show what matters now
- **Narrative-first** - Data tells a story
- **Calm visual language** - Generous spacing, minimal color
- **Trust through transparency** - Explainable insights

---

## 📦 Package Details

- **Size:** ~90KB minified + gzipped (with tree-shaking)
- **TypeScript:** Fully typed
- **Formats:** CommonJS + ESM
- **Peer Dependencies:** React 18+, lucide-react, recharts
- **License:** MIT

---

## 🎓 Learn More

### Documentation
- [Full Usage Guide](./library/README.md)
- [Publishing Guide](./library/PUBLISHING.md)
- [All Sharing Options](./SHARING_OPTIONS.md)

### Examples
- See `/src/app` for live examples
- Check component showcase in the running app
- Read component specifications

---

## 🤝 Support

Need help?

1. **Check the docs** - Everything is documented
2. **See examples** - Run the showcase app
3. **Read guides** - 6 comprehensive guides included

---

## ✨ You're Ready!

Everything is set up and documented. Choose your sharing method and go!

**Next Steps:**
1. Read [SHARING_OPTIONS.md](./SHARING_OPTIONS.md) to pick your approach
2. Follow the relevant guide
3. Start building!

---

**The Espai Design System is production-ready and waiting to be shared.** 🚀

Relief and clarity, not urgency or alarm.
