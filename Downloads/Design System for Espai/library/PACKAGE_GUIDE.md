# Espai Design System Package Guide

## 📦 What Gets Published

When you run `npm publish`, this is what users will download:

```
@espai/design-system/
├── dist/
│   ├── index.js              # CommonJS entry point
│   ├── index.mjs             # ESM entry point
│   ├── index.d.ts            # TypeScript definitions
│   ├── styles.css            # Design system styles
│   └── [component files]     # All compiled components
├── package.json              # Package metadata
└── README.md                 # Documentation
```

**Note:** The `src/` folder is NOT published (excluded by .npmignore)

## 🎯 How Users Install

```bash
npm install @espai/design-system
```

This downloads the `dist/` folder contents to their `node_modules/@espai/design-system/`

## 📥 What Gets Imported

### Styles

```tsx
import '@espai/design-system/styles';
```

Resolves to: `dist/styles.css`

### Components

```tsx
import { EspaiButton, EspaiCard } from '@espai/design-system';
```

Resolves to: `dist/index.js` (or `.mjs` for ESM)

### TypeScript Types

```tsx
import type { EspaiButtonProps } from '@espai/design-system';
```

Resolves to: `dist/index.d.ts`

### Design Tokens

```tsx
import { tokens } from '@espai/design-system';
```

Resolves to: `dist/index.js` → `dist/tokens.js`

## 🛠️ Build Process

```
Source Files (src/)
       ↓
   npm run build (using tsup)
       ↓
Built Files (dist/)
       ↓
   npm publish
       ↓
   npm Registry
       ↓
User's node_modules
```

### Build Tool: tsup

`tsup` compiles TypeScript and bundles everything:
- Transpiles `.tsx` → `.js` and `.mjs`
- Generates `.d.ts` type definitions
- Bundles all dependencies
- Creates source maps

## 📋 Entry Points

Defined in `package.json`:

```json
{
  "main": "./dist/index.js",        // CommonJS (Node.js)
  "module": "./dist/index.mjs",     // ESM (modern bundlers)
  "types": "./dist/index.d.ts",     // TypeScript
  "exports": {
    ".": {
      "import": "./dist/index.mjs",   // ESM import
      "require": "./dist/index.js",   // CommonJS require
      "types": "./dist/index.d.ts"    // TypeScript types
    },
    "./styles": "./dist/styles.css"   // Direct CSS import
  }
}
```

## 🌲 Tree Shaking

Users only bundle what they import:

```tsx
// User imports only EspaiButton
import { EspaiButton } from '@espai/design-system';

// Their bundle includes:
// ✅ EspaiButton component
// ✅ Lucide-react icons used by EspaiButton
// ❌ EspaiTable (not imported, not bundled)
// ❌ Recharts (not imported, not bundled)
```

This keeps bundle sizes small!

## 📦 Dependency Types

### Dependencies (Bundled)

Installed when users install your package:

```json
{
  "dependencies": {
    "lucide-react": "^0.487.0",
    "recharts": "^2.15.2",
    "clsx": "^2.1.1"
  }
}
```

### Peer Dependencies (Not Bundled)

User must install separately:

```json
{
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
```

Why? React should only exist once in the user's project.

### Dev Dependencies (Never Published)

Only needed for building:

```json
{
  "devDependencies": {
    "tsup": "^8.0.0",
    "typescript": "^5.3.3"
  }
}
```

## 🔍 Package Size

Before compression:
- **Core components**: ~150KB
- **All components**: ~300KB
- **Styles**: ~15KB

After gzip (what users actually download):
- **Core**: ~45KB
- **All**: ~90KB
- **Styles**: ~4KB

With tree-shaking, users typically bundle 20-40KB.

## 🎨 CSS Approach

The package includes all CSS in one file:
- ✅ Simple to import
- ✅ No build step for users
- ✅ Works with any framework
- ✅ Can be customized via CSS variables

Users import once:
```tsx
import '@espai/design-system/styles';
```

## 🔧 Customization for Users

Users can override design tokens:

```css
/* In their own CSS file */
:root {
  --espai-focus-600: #FF0000;  /* Red instead of blue */
  --font-body: 'Poppins', sans-serif;  /* Different font */
}
```

Or use tokens programmatically:

```tsx
import { tokens } from '@espai/design-system';

const MyComponent = () => {
  return (
    <div style={{ color: tokens.colors.focus[600] }}>
      Custom color using token
    </div>
  );
};
```

## 📚 Examples of Use

### Simple Use

```tsx
import '@espai/design-system/styles';
import { EspaiButton } from '@espai/design-system';

<EspaiButton variant="primary">Click Me</EspaiButton>
```

### Advanced Use

```tsx
import '@espai/design-system/styles';
import { 
  EspaiTable, 
  StatusBadge, 
  MetricCell,
  tokens 
} from '@espai/design-system';

const columns = [
  { 
    key: 'status', 
    label: 'Status',
    render: (value) => <StatusBadge status={value} type="support" />
  },
  { 
    key: 'revenue', 
    label: 'Revenue',
    render: (value) => <MetricCell value={value} trend="up" />
  },
];

<EspaiTable 
  data={data} 
  columns={columns}
  onRowClick={(row) => console.log(row)}
/>

<div style={{ color: tokens.colors.focus[600] }}>
  Using tokens directly
</div>
```

## 🚀 Version Updates

When you publish updates:

```bash
# Patch: 1.0.0 → 1.0.1 (bug fixes)
npm version patch

# Minor: 1.0.0 → 1.1.0 (new features)
npm version minor

# Major: 1.0.0 → 2.0.0 (breaking changes)
npm version major

# Then publish
npm run build
npm publish
```

Users update with:
```bash
npm update @espai/design-system
```

## 🎯 Best Practices

1. **Keep bundle size small**
   - Only include what's needed
   - Use tree-shakeable exports
   - Mark React as peer dependency

2. **Maintain backwards compatibility**
   - Use semantic versioning
   - Document breaking changes
   - Provide migration guides

3. **Optimize for DX (Developer Experience)**
   - Full TypeScript support
   - Clear documentation
   - Helpful error messages

4. **Performance**
   - Minimize CSS
   - Tree-shakeable components
   - No unnecessary dependencies

---

**This package structure ensures users get a lightweight, easy-to-use design system!** ⚡
