// Core Components
export { EspaiButton } from './components/EspaiButton';
export type { EspaiButtonProps } from './components/EspaiButton';

export { EspaiCard, EspaiMiniCard } from './components/EspaiCard';
export type { EspaiCardProps, EspaiMiniCardProps } from './components/EspaiCard';

export { EspaiTable, StatusBadge, MetricCell, AccountCell } from './components/EspaiTable';
export type { EspaiTableProps, ColumnDef, StatusBadgeProps } from './components/EspaiTable';

export { 
  ChartWrapper, 
  EspaiLineChart, 
  EspaiAreaChart, 
  EspaiBarChart 
} from './components/EspaiChart';
export type { 
  ChartWrapperProps, 
  EspaiLineChartProps, 
  EspaiAreaChartProps, 
  EspaiBarChartProps 
} from './components/EspaiChart';

export { EspaiNavigation } from './components/EspaiNavigation';

export { ProgressiveDisclosure, DetailRow } from './components/ProgressiveDisclosure';
export type { ProgressiveDisclosureProps, DetailRowProps } from './components/ProgressiveDisclosure';

export { EmptyState } from './components/EmptyState';
export type { EmptyStateProps } from './components/EmptyState';

export { InsightCard } from './components/InsightCard';
export type { InsightCardProps } from './components/InsightCard';

// Design System Documentation Components (optional - for building your own docs)
export { ColorSwatch } from './components/ColorSwatch';
export { TypographyExample } from './components/TypographyExample';
export { DesignPrinciple } from './components/DesignPrinciple';

// Design Tokens (as JS constants for programmatic access)
export * from './tokens';
