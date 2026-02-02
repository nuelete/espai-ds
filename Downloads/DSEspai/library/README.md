# Espai Design System

> Relief and clarity, not urgency or alarm.

A complete design system for customer and revenue risk platforms. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Calm Visual Language** - Generous spacing, minimalist color palette, and subtle interactions
- **Progressive Disclosure** - Surface only relevant information at each step
- **Narrative-First** - Present insights as a coherent story, not static reports
- **Trust & Transparency** - All insights are explainable and evidence-backed
- **TypeScript Support** - Full type safety for all components
- **Accessible** - WCAG compliant with proper keyboard navigation

## Installation

```bash
npm install @espai/design-system
```

### Peer Dependencies

```bash
npm install react react-dom lucide-react recharts
```

## Quick Start

### 1. Import Styles

In your main app file:

```tsx
import '@espai/design-system/styles';
```

### 2. Use Components

```tsx
import { EspaiButton, EspaiCard, InsightCard } from '@espai/design-system';

function App() {
  return (
    <div>
      <EspaiCard
        title="Revenue at Risk"
        value="$847K"
        change={{ value: '+12%', direction: 'down', label: 'vs last month' }}
        iconColor="critical"
        description="3 accounts requiring attention"
      />
      
      <EspaiButton variant="primary" onClick={() => alert('Clicked!')}>
        Take Action
      </EspaiButton>
    </div>
  );
}
```

## Components

### Core Components

- **EspaiButton** - Primary interactive element with multiple variants
- **EspaiCard** - Display key metrics and data points with trends
- **EspaiMiniCard** - Compact metric display for category counts
- **EspaiTable** - Data tables with sorting and custom cell rendering
- **EspaiChart** - Line, area, and bar charts with insight callouts
- **ProgressiveDisclosure** - Expandable sections for detail on demand
- **InsightCard** - Narrative-driven insight presentation
- **EmptyState** - Graceful no-data handling

### Helper Components

- **StatusBadge** - Semantic status indicators for tables
- **MetricCell** - Formatted metric display with trends
- **AccountCell** - Account name with subtitle for tables
- **DetailRow** - Consistent detail formatting in disclosure sections
- **ChartWrapper** - Consistent chart styling with insight callouts

## Design Tokens

### Colors

The system uses a minimalist, calm color palette:

- **Neutrals** - Foundation colors for 90% of the UI
- **Focus Blue** - Primary accent for important, actionable items
- **Calm Teal** - Supportive secondary for positive signals
- **Soft Signal** - Attention without alarm for warnings
- **Measured Red** - Critical state (used sparingly, <1% of UI)

```tsx
import { tokens } from '@espai/design-system';

// Access programmatically
const primaryColor = tokens.colors.focus[600];
```

### Typography

Three typefaces work together:

- **Inter** - UI and body text
- **Fraunces** - Insight headlines only
- **JetBrains Mono** - Metrics and data

### CSS Variables

All design tokens are available as CSS variables:

```css
.custom-element {
  color: var(--espai-focus-600);
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
}
```

## Examples

### Insight Card

```tsx
<InsightCard
  type="critical"
  headline="TechVentures contract expires in 7 days without renewal"
  explanation="This $340K annual contract has not been renewed. Last contact was 23 days ago."
  metric="$340K"
  metricLabel="at risk"
  action="Escalate to executive team immediately"
/>
```

### Data Table

```tsx
import { EspaiTable, StatusBadge, MetricCell } from '@espai/design-system';

const columns = [
  { key: 'name', label: 'Account' },
  { 
    key: 'status', 
    label: 'Status',
    render: (value) => <StatusBadge status={value} type="support" />
  },
  { 
    key: 'revenue', 
    label: 'ARR',
    render: (value, row) => (
      <MetricCell value={value} trend={row.trend} />
    )
  },
];

const data = [
  { id: 1, name: 'Acme Corp', status: 'Healthy', revenue: '$340K', trend: 'up' },
  { id: 2, name: 'TechVentures', status: 'At Risk', revenue: '$150K', trend: 'down' },
];

<EspaiTable columns={columns} data={data} />
```

### Progressive Disclosure

```tsx
import { ProgressiveDisclosure, DetailRow } from '@espai/design-system';

<ProgressiveDisclosure
  summary="Acme Corp - Enterprise"
  summaryMetric="$340K ARR"
  type="signal"
>
  <DetailRow label="Contract Start" value="Jan 2023" />
  <DetailRow label="Next Renewal" value="Jan 2025" />
  <DetailRow label="Health Score" value="78" subtext="Declining" />
</ProgressiveDisclosure>
```

### Charts

```tsx
import { ChartWrapper, EspaiLineChart } from '@espai/design-system';

const data = [
  { date: 'Jan', value: 340000 },
  { date: 'Feb', value: 325000 },
  { date: 'Mar', value: 310000 },
];

<ChartWrapper
  title="Revenue Trend"
  description="Last 3 months"
  insight={{
    text: "Revenue declining 8.8% over the past quarter",
    type: "signal"
  }}
>
  <EspaiLineChart
    data={data}
    dataKey="value"
    dataLabel="Revenue"
    color="var(--espai-focus-600)"
  />
</ChartWrapper>
```

## Design Principles

### UX Principles

1. **Progressive Disclosure** - Surface only relevant information
2. **Narrative Structure** - Present insights as a coherent story
3. **Immediate Orientation** - Users understand context within seconds
4. **Trust & Transparency** - All insights are explainable
5. **Habit Formation** - Reward regular usage without being intrusive
6. **Calm by Design** - Generous spacing and minimalist palette

### UI Principles

- Use sentence case for all headings and labels
- Never use all caps (reduces readability)
- Never bold entire paragraphs
- Maintain generous line height (1.5 minimum)
- Use negative letter spacing on large headings
- Color encodes meaning, not urgency

## TypeScript

All components are fully typed:

```tsx
import type { 
  EspaiButtonProps,
  EspaiCardProps,
  EspaiTableProps,
  ColumnDef
} from '@espai/design-system';
```

## License

MIT

## Support

For questions, issues, or feature requests, please open an issue on GitHub.

---

**Espai Design System** — The system of record for customer and revenue risk, designed to explain why revenue is at risk and guide what to do next.
