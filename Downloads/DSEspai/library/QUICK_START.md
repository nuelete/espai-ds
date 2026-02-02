# Quick Start Guide

Get the Espai Design System up and running in 5 minutes!

## 1️⃣ Build the Package

```bash
cd library
npm install
npm run build
```

## 2️⃣ Choose Your Method

### Method A: Test Locally (Recommended First)

Link the package to test it locally before publishing:

```bash
# In the library folder
npm link

# In your test project
npm link @espai/design-system
npm install lucide-react recharts
```

### Method B: Publish to npm

```bash
# Login to npm
npm login

# Publish (from library folder)
npm publish --access public
```

### Method C: Use Without Publishing

Copy the entire `/library/src/components` folder and `/library/src/styles.css` to your project.

## 3️⃣ Install in Your Project

```bash
npm install @espai/design-system lucide-react recharts
```

If using Tailwind CSS (recommended), make sure it's configured in your project.

## 4️⃣ Import Styles

In your main app file (e.g., `App.tsx` or `index.tsx`):

```tsx
import '@espai/design-system/styles';
```

## 5️⃣ Use Components

```tsx
import { EspaiButton, EspaiCard } from '@espai/design-system';

function App() {
  return (
    <div>
      <EspaiCard
        title="Revenue at Risk"
        value="$847K"
        change={{ value: '+12%', direction: 'down', label: 'vs last month' }}
        iconColor="critical"
      />
      
      <EspaiButton variant="primary" onClick={() => alert('Hello!')}>
        Take Action
      </EspaiButton>
    </div>
  );
}
```

## 🎉 That's it!

You're ready to build with the Espai Design System.

## Common Issues

### "Module not found" error
Make sure you've installed peer dependencies:
```bash
npm install lucide-react recharts
```

### Styles not applying
Import the stylesheet:
```tsx
import '@espai/design-system/styles';
```

### TypeScript errors
The package includes full TypeScript definitions. Make sure your project is configured for TypeScript.

## Next Steps

- Read the full [README.md](./README.md) for detailed documentation
- Check [PUBLISHING.md](./PUBLISHING.md) for publishing instructions
- Explore all components in the original design system app

## For Lovable/Bolt Projects

1. Publish the package to npm (Method B above)
2. In Lovable, tell the AI:
   ```
   Install @espai/design-system, lucide-react, and recharts packages
   ```
3. Import and use components normally

## Need Help?

Refer to:
- [README.md](./README.md) - Full documentation
- [PUBLISHING.md](./PUBLISHING.md) - Publishing guide
- Original design system in `/src/app` - Live examples
