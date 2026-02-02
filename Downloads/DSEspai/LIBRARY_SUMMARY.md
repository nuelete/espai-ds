# Espai Design System - Component Library

✅ **Complete shareable component library created!**

## 📦 What's Been Created

A publishable npm package located in the `/library` folder containing:

### Core Components
- ✅ **EspaiButton** - Interactive buttons with variants
- ✅ **EspaiCard** & **EspaiMiniCard** - Metric display cards
- ✅ **EspaiTable** - Data tables with sorting
- ✅ **EspaiChart** (Line, Area, Bar) - Data visualizations
- ✅ **EspaiNavigation** - Sidebar navigation
- ✅ **ProgressiveDisclosure** - Expandable sections
- ✅ **InsightCard** - Narrative-driven insights
- ✅ **EmptyState** - Graceful no-data states

### Helper Components
- ✅ **StatusBadge** - Status indicators
- ✅ **MetricCell** - Formatted metrics
- ✅ **AccountCell** - Account display
- ✅ **DetailRow** - Detail formatting
- ✅ **ChartWrapper** - Chart container

### Documentation Components (Optional)
- ✅ **ColorSwatch** - Color documentation
- ✅ **TypographyExample** - Typography showcase
- ✅ **DesignPrinciple** - Principle cards

### Design Tokens
- ✅ **tokens.ts** - Programmatic access to all design tokens
- ✅ **styles.css** - CSS variables for all colors, typography, spacing

## 📂 Folder Structure

```
/library
├── package.json          # Package configuration
├── tsconfig.json         # TypeScript config
├── README.md             # Usage documentation
├── PUBLISHING.md         # Publishing guide
├── .npmignore           # Files to exclude from npm
├── src/
│   ├── index.ts          # Main exports
│   ├── tokens.ts         # Design tokens
│   ├── styles.css        # Core styles
│   └── components/       # All components
│       ├── EspaiButton.tsx
│       ├── EspaiCard.tsx
│       ├── EspaiTable.tsx
│       ├── EspaiChart.tsx
│       ├── EspaiNavigation.tsx
│       ├── ProgressiveDisclosure.tsx
│       ├── InsightCard.tsx
│       ├── EmptyState.tsx
│       ├── ColorSwatch.tsx
│       ├── TypographyExample.tsx
│       └── DesignPrinciple.tsx
└── dist/                 # Built files (after npm run build)
```

## 🚀 Next Steps

### Option 1: Publish to npm (Public)

```bash
cd library
npm install
npm run build
npm login
npm publish --access public
```

### Option 2: Publish to GitHub Packages

```bash
cd library
npm install
npm run build
# Create .npmrc with GitHub registry
npm login --registry=https://npm.pkg.github.com
npm publish
```

### Option 3: Use Locally Without Publishing

```bash
cd library
npm install
npm run build
npm link

# In your other project
npm link @espai/design-system
```

## 📖 Using in Your Projects

### Installation

```bash
npm install @espai/design-system lucide-react recharts
```

### Import Styles

```tsx
import '@espai/design-system/styles';
```

### Use Components

```tsx
import { 
  EspaiButton, 
  EspaiCard, 
  EspaiTable,
  InsightCard 
} from '@espai/design-system';

function App() {
  return (
    <div>
      <EspaiCard
        title="Revenue at Risk"
        value="$847K"
        change={{ value: '+12%', direction: 'down' }}
        iconColor="critical"
      />
      
      <EspaiButton variant="primary">
        Take Action
      </EspaiButton>
      
      <InsightCard
        type="critical"
        headline="Contract expiring soon"
        explanation="This $340K contract needs attention"
        metric="$340K"
      />
    </div>
  );
}
```

## 🔧 Customization

You can customize the design system by:

1. **Overriding CSS variables:**
```css
:root {
  --espai-focus-600: #your-brand-color;
  --font-body: 'Your Font', sans-serif;
}
```

2. **Using design tokens programmatically:**
```tsx
import { tokens } from '@espai/design-system';

const brandColor = tokens.colors.focus[600];
```

## 📋 Requirements for Consuming Projects

Your projects need:
- React 18+
- Tailwind CSS (for utility classes)
- lucide-react (for icons)
- recharts (for charts)

## 🎯 For Lovable/Bolt Projects

To use in Lovable or similar platforms:

1. **Publish the package** to npm or GitHub Packages
2. **In your Lovable project**, ask the AI to:
   ```
   Install @espai/design-system, lucide-react, and recharts
   ```
3. **Import and use:**
   ```tsx
   import '@espai/design-system/styles';
   import { EspaiButton, EspaiCard } from '@espai/design-system';
   ```

## 📝 Documentation

- **README.md** - Complete usage guide with examples
- **PUBLISHING.md** - Step-by-step publishing instructions
- All components have TypeScript types exported
- Inline JSDoc comments for IDE autocomplete

## 🎨 Design Philosophy

The library follows these principles:
- **Relief and clarity, not urgency or alarm**
- **Progressive disclosure** - Show what matters now
- **Narrative-first** - Data tells a story
- **Calm visual language** - Generous spacing, minimal color
- **Trust through transparency** - Explainable insights

## ✨ Features

- ✅ Fully typed with TypeScript
- ✅ Tree-shakeable (only import what you use)
- ✅ Both CommonJS and ESM builds
- ✅ CSS variables for easy theming
- ✅ Accessible components
- ✅ Comprehensive documentation
- ✅ Ready to publish

## 📦 Package Size

Estimated sizes:
- **Core components**: ~50KB minified
- **All components**: ~120KB minified
- **Styles**: ~8KB

Tree-shaking ensures you only bundle what you import!

## 🔄 Version Management

Follow semantic versioning:
- **MAJOR** (1.0.0 → 2.0.0): Breaking changes
- **MINOR** (1.0.0 → 1.1.0): New features
- **PATCH** (1.0.0 → 1.0.1): Bug fixes

Use `npm version [major|minor|patch]` to update.

## 💡 Tips

1. **Test before publishing**: Use `npm link` to test locally
2. **Build check**: Always run `npm run build` before publishing
3. **Peer dependencies**: Listed separately so users control versions
4. **Documentation**: Keep README updated with new features

## 🤝 Contributing

When updating the library:
1. Make changes in `/library/src/`
2. Update version in `package.json`
3. Run `npm run build`
4. Test in a project
5. Publish with `npm publish`

---

**You now have a production-ready, shareable component library!** 🎉

Ready to install in any project, including Lovable, Bolt, or any React app.
