# How to Download the Espai Library

## Option 1: Download via Figma Make Interface

Look for a **Download** or **Export** button in the Figma Make interface (usually in the top menu or settings) to download the entire project as a ZIP file.

## Option 2: Manual File List

If you need to recreate files locally, here's the complete structure:

### Library Package Files (`/library/`)
```
library/
├── package.json
├── tsconfig.json
├── .npmignore
├── README.md
├── CHANGELOG.md
├── LICENSE
├── src/
│   ├── index.ts
│   ├── components/
│   │   ├── EspaiButton/
│   │   │   ├── EspaiButton.tsx
│   │   │   └── index.ts
│   │   ├── EspaiCard/
│   │   │   ├── EspaiCard.tsx
│   │   │   └── index.ts
│   │   ├── EspaiInput/
│   │   │   ├── EspaiInput.tsx
│   │   │   └── index.ts
│   │   ├── EspaiTable/
│   │   │   ├── EspaiTable.tsx
│   │   │   └── index.ts
│   │   ├── EspaiChart/
│   │   │   ├── EspaiChart.tsx
│   │   │   └── index.ts
│   │   ├── EspaiMetric/
│   │   │   ├── EspaiMetric.tsx
│   │   │   └── index.ts
│   │   ├── EspaiAlert/
│   │   │   ├── EspaiAlert.tsx
│   │   │   └── index.ts
│   │   ├── EspaiTooltip/
│   │   │   ├── EspaiTooltip.tsx
│   │   │   └── index.ts
│   │   ├── EspaiBadge/
│   │   │   ├── EspaiBadge.tsx
│   │   │   └── index.ts
│   │   ├── EspaiTabs/
│   │   │   ├── EspaiTabs.tsx
│   │   │   └── index.ts
│   │   ├── EspaiSelect/
│   │   │   ├── EspaiSelect.tsx
│   │   │   └── index.ts
│   │   ├── EspaiModal/
│   │   │   ├── EspaiModal.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── styles/
│   │   ├── tokens.css
│   │   └── index.ts
│   ├── hooks/
│   │   ├── useEspaiTheme.ts
│   │   └── index.ts
│   └── utils/
│       ├── cn.ts
│       └── index.ts
└── docs/
    ├── GETTING_STARTED.md
    ├── COMPONENTS.md
    ├── DESIGN_TOKENS.md
    ├── THEMING.md
    ├── TYPESCRIPT.md
    ├── MIGRATION.md
    ├── CONTRIBUTING.md
    └── PUBLISHING.md
```

### Documentation Files (root level)
```
├── README_LIBRARY.md
├── LIBRARY_SUMMARY.md
├── SHARING_OPTIONS.md
├── WHAT_WAS_CREATED.md
└── GIT_PUSH_GUIDE.md
```

## Total Files: 47

Would you like me to display the contents of specific files so you can copy them manually?
