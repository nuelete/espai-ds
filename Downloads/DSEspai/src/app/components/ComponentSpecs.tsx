import { EspaiButton } from './EspaiButton';
import { EspaiCard, EspaiMiniCard } from './EspaiCard';
import { StatusBadge } from './EspaiTable';
import { DollarSign, Mail } from 'lucide-react';

export function ComponentSpecs() {
  return (
    <div className="space-y-16">
      <section>
        <h2 className="mb-3">Component Specifications</h2>
        <p className="text-[var(--text-secondary)] mb-8 max-w-3xl">
          Detailed specifications for each component including props, variants, usage guidelines, and accessibility requirements.
        </p>
      </section>

      {/* Buttons */}
      <ComponentSpec
        name="EspaiButton"
        description="Primary interactive element for user actions. Supports multiple variants, sizes, and can include icons."
        importPath="@/app/components/EspaiButton"
        examples={
          <div className="space-y-6">
            <div>
              <h4 className="mb-3">Variants</h4>
              <div className="flex flex-wrap gap-3">
                <EspaiButton variant="primary">Primary</EspaiButton>
                <EspaiButton variant="secondary">Secondary</EspaiButton>
                <EspaiButton variant="ghost">Ghost</EspaiButton>
                <EspaiButton variant="signal">Signal</EspaiButton>
                <EspaiButton variant="critical">Critical</EspaiButton>
              </div>
            </div>
            <div>
              <h4 className="mb-3">Sizes</h4>
              <div className="flex flex-wrap items-center gap-3">
                <EspaiButton size="sm">Small</EspaiButton>
                <EspaiButton size="md">Medium</EspaiButton>
                <EspaiButton size="lg">Large</EspaiButton>
              </div>
            </div>
            <div>
              <h4 className="mb-3">With Icons</h4>
              <div className="flex flex-wrap gap-3">
                <EspaiButton icon={Mail} iconPosition="left">Send Email</EspaiButton>
                <EspaiButton variant="secondary" icon={Mail} iconPosition="right">Schedule</EspaiButton>
              </div>
            </div>
          </div>
        }
        props={[
          { name: 'children', type: 'React.ReactNode', required: true, default: '-', description: 'Button text or content' },
          { name: 'variant', type: "'primary' | 'secondary' | 'ghost' | 'signal' | 'critical'", required: false, default: "'primary'", description: 'Visual style variant' },
          { name: 'size', type: "'sm' | 'md' | 'lg'", required: false, default: "'md'", description: 'Button size' },
          { name: 'icon', type: 'LucideIcon', required: false, default: '-', description: 'Optional icon component' },
          { name: 'iconPosition', type: "'left' | 'right'", required: false, default: "'left'", description: 'Position of icon relative to text' },
          { name: 'onClick', type: '() => void', required: false, default: '-', description: 'Click handler function' },
          { name: 'disabled', type: 'boolean', required: false, default: 'false', description: 'Disabled state' },
          { name: 'fullWidth', type: 'boolean', required: false, default: 'false', description: 'Expand to container width' },
        ]}
        usage={[
          'Use primary variant for the main action on a page or section',
          'Use secondary for alternative actions of equal importance',
          'Use ghost for tertiary actions or navigation',
          'Use signal for actions related to warnings or important notifications',
          'Use critical only for destructive actions (delete, remove, etc.)',
          'Limit to one primary button per section to maintain clear hierarchy',
        ]}
        accessibility={[
          'Includes proper focus states for keyboard navigation',
          'Disabled state prevents interaction and uses muted colors',
          'Text should be clear and action-oriented (e.g., "Save changes" not "Submit")',
          'Icons should supplement, not replace text labels',
        ]}
      />

      {/* Cards */}
      <ComponentSpec
        name="EspaiCard"
        description="Display key metrics and data points with optional trends, changes, and icons. Used for dashboard overviews and KPI displays."
        importPath="@/app/components/EspaiCard"
        examples={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <EspaiCard
              title="Revenue at Risk"
              value="$847K"
              change={{ value: '+12%', direction: 'down', label: 'vs last month' }}
              icon={DollarSign}
              iconColor="critical"
              description="3 accounts requiring attention"
            />
            <EspaiCard
              title="Health Score"
              value="78"
              change={{ value: '+5 pts', direction: 'up', label: 'improving' }}
              iconColor="support"
            />
          </div>
        }
        props={[
          { name: 'title', type: 'string', required: true, default: '-', description: 'Card title/metric name' },
          { name: 'value', type: 'string', required: true, default: '-', description: 'Primary metric value' },
          { name: 'change', type: "{ value: string; direction: 'up' | 'down' | 'neutral'; label?: string }", required: false, default: '-', description: 'Change indicator with trend' },
          { name: 'icon', type: 'LucideIcon', required: false, default: '-', description: 'Optional icon' },
          { name: 'iconColor', type: "'focus' | 'support' | 'signal' | 'critical' | 'neutral'", required: false, default: "'focus'", description: 'Icon background color' },
          { name: 'description', type: 'string', required: false, default: '-', description: 'Supporting description text' },
        ]}
        usage={[
          'Use for displaying key metrics and KPIs',
          'Include change indicators when comparing to previous periods',
          'Use meaningful icons that reinforce the metric meaning',
          'Keep descriptions brief and contextual',
          'Group related cards together in grids',
        ]}
        accessibility={[
          'Title and value are clearly labeled for screen readers',
          'Trend directions use both color and icons for clarity',
          'Cards should be keyboard navigable if interactive',
        ]}
      />

      {/* Mini Cards */}
      <ComponentSpec
        name="EspaiMiniCard"
        description="Compact metric display for secondary data points or category counts. Supports color-coding by type."
        importPath="@/app/components/EspaiCard"
        examples={
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <EspaiMiniCard label="Critical" value="3" type="critical" />
            <EspaiMiniCard label="At Risk" value="8" type="signal" />
            <EspaiMiniCard label="Healthy" value="89" type="support" />
            <EspaiMiniCard label="Expanding" value="27" type="focus" />
          </div>
        }
        props={[
          { name: 'label', type: 'string', required: true, default: '-', description: 'Metric label' },
          { name: 'value', type: 'string', required: true, default: '-', description: 'Metric value' },
          { name: 'type', type: "'neutral' | 'focus' | 'support' | 'signal' | 'critical'", required: false, default: "'neutral'", description: 'Color theme' },
        ]}
        usage={[
          'Use for category breakdowns or status counts',
          'Arrange in grids to show distribution across categories',
          'Color should reflect the meaning (critical=red, support=teal, etc.)',
          'Keep values concise (numbers, short text)',
        ]}
        accessibility={[
          'Label and value are properly associated',
          'Color is not the only indicator of meaning',
        ]}
      />

      {/* Status Badge */}
      <ComponentSpec
        name="StatusBadge"
        description="Display status or category labels with semantic color coding. Used in tables and lists."
        importPath="@/app/components/EspaiTable"
        examples={
          <div className="flex flex-wrap gap-3">
            <StatusBadge status="Active" type="focus" />
            <StatusBadge status="Healthy" type="support" />
            <StatusBadge status="At Risk" type="signal" />
            <StatusBadge status="Critical" type="critical" />
            <StatusBadge status="Paused" type="neutral" />
          </div>
        }
        props={[
          { name: 'status', type: 'string', required: true, default: '-', description: 'Status text to display' },
          { name: 'type', type: "'neutral' | 'focus' | 'support' | 'signal' | 'critical'", required: false, default: "'neutral'", description: 'Color theme' },
        ]}
        usage={[
          'Use in tables to indicate row status or category',
          'Choose colors based on meaning: critical (urgent), signal (warning), support (positive), focus (active), neutral (default)',
          'Keep status text short (1-2 words)',
          'Use consistent status labels across the application',
        ]}
        accessibility={[
          'Status is conveyed through text, not just color',
          'Sufficient contrast between background and text',
        ]}
      />

      {/* Table */}
      <ComponentSpec
        name="EspaiTable"
        description="Display tabular data with sortable columns, custom cell rendering, and optional row actions. Supports progressive disclosure through row clicks."
        importPath="@/app/components/EspaiTable"
        examples={
          <div className="p-4 bg-[var(--espai-neutral-050)] rounded-lg">
            <p className="text-sm text-[var(--text-secondary)]">
              See the "Data Tables" section in Components tab for full examples with data.
            </p>
          </div>
        }
        props={[
          { name: 'title', type: 'string', required: false, default: '-', description: 'Table title' },
          { name: 'description', type: 'string', required: false, default: '-', description: 'Table description' },
          { name: 'columns', type: 'ColumnDef<T>[]', required: true, default: '-', description: 'Column definitions with labels and render functions' },
          { name: 'data', type: 'T[]', required: true, default: '-', description: 'Array of data objects to display' },
          { name: 'onRowClick', type: '(row: T) => void', required: false, default: '-', description: 'Handler for row clicks' },
          { name: 'emptyMessage', type: 'string', required: false, default: '"No data available"', description: 'Message shown when data is empty' },
        ]}
        usage={[
          'Use for displaying lists of accounts, transactions, or other tabular data',
          'Provide custom render functions for complex cells (metrics, badges, etc.)',
          'Enable row clicking for progressive disclosure of details',
          'Include sort indicators on column headers',
          'Keep column count reasonable (4-6 columns max for readability)',
        ]}
        accessibility={[
          'Proper table semantics with thead, tbody, th, td',
          'Column headers are clearly labeled',
          'Sort controls are keyboard accessible',
          'Empty states provide helpful guidance',
        ]}
      />

      {/* Charts */}
      <ComponentSpec
        name="EspaiLineChart / EspaiAreaChart / EspaiBarChart"
        description="Data visualization components for trends, distributions, and comparisons. All charts include insight callouts and tooltips."
        importPath="@/app/components/EspaiChart"
        examples={
          <div className="p-4 bg-[var(--espai-neutral-050)] rounded-lg">
            <p className="text-sm text-[var(--text-secondary)]">
              See the "Data Visualizations" section in Components tab for full interactive examples.
            </p>
          </div>
        }
        props={[
          { name: 'data', type: 'Array<{ date/name: string; value: number; comparison?: number }>', required: true, default: '-', description: 'Chart data array' },
          { name: 'dataKey', type: 'string', required: true, default: '-', description: 'Key for primary data series' },
          { name: 'dataLabel', type: 'string', required: true, default: '-', description: 'Label for primary data series' },
          { name: 'comparisonKey', type: 'string', required: false, default: '-', description: 'Key for comparison data (line chart only)' },
          { name: 'comparisonLabel', type: 'string', required: false, default: '-', description: 'Label for comparison data' },
          { name: 'color', type: 'string', required: false, default: 'var(--espai-focus-600)', description: 'Chart color (CSS variable or hex)' },
        ]}
        usage={[
          'Wrap all charts with ChartWrapper for consistent styling and insights',
          'Use line charts for trends over time',
          'Use area charts for cumulative values or volume trends',
          'Use bar charts for categorical comparisons',
          'Always include insight callouts to explain what the data means',
          'Use calm colors from the Espai palette',
        ]}
        accessibility={[
          'Charts include text-based insights for screen readers',
          'Tooltips provide detailed data on hover',
          'Color is not the only indicator of meaning',
        ]}
      />

      {/* Progressive Disclosure */}
      <ComponentSpec
        name="ProgressiveDisclosure"
        description="Expandable container that reveals detail on demand. Core pattern for reducing cognitive load."
        importPath="@/app/components/ProgressiveDisclosure"
        examples={
          <div className="p-4 bg-[var(--espai-neutral-050)] rounded-lg">
            <p className="text-sm text-[var(--text-secondary)]">
              See the "Progressive Disclosure" section in Components tab for full interactive examples.
            </p>
          </div>
        }
        props={[
          { name: 'summary', type: 'string', required: true, default: '-', description: 'Summary text shown when collapsed' },
          { name: 'summaryMetric', type: 'string', required: false, default: '-', description: 'Optional metric displayed on right side' },
          { name: 'children', type: 'React.ReactNode', required: true, default: '-', description: 'Content revealed when expanded' },
          { name: 'defaultOpen', type: 'boolean', required: false, default: 'false', description: 'Initial open state' },
          { name: 'type', type: "'focus' | 'support' | 'signal' | 'critical' | 'neutral'", required: false, default: "'neutral'", description: 'Border color when open' },
        ]}
        usage={[
          'Use for account details, transaction breakdowns, or any nested information',
          'Keep summaries concise and scannable',
          'Include key metrics in the summary row',
          'Use DetailRow component for consistent detail formatting',
          'Color-code by urgency or category type',
        ]}
        accessibility={[
          'Keyboard accessible with Enter/Space to toggle',
          'Clear visual indication of expanded/collapsed state',
          'Focus states for keyboard navigation',
        ]}
      />

      {/* Navigation */}
      <ComponentSpec
        name="EspaiNavigation"
        description="Sidebar navigation with badge indicators and user profile. Primary navigation pattern for the application."
        importPath="@/app/components/EspaiNavigation"
        examples={
          <div className="p-4 bg-[var(--espai-neutral-050)] rounded-lg">
            <p className="text-sm text-[var(--text-secondary)]">
              The navigation component is visible in the left sidebar of this design system.
            </p>
          </div>
        }
        props={[
          { name: 'No props', type: '-', required: false, default: '-', description: 'Currently configured with static nav items' },
        ]}
        usage={[
          'Use as primary app navigation (left sidebar)',
          'Show badge counts for items requiring attention',
          'Use signal/critical colors for urgent badge indicators',
          'Highlight active page with background color',
          'Include user profile section at bottom',
        ]}
        accessibility={[
          'Keyboard navigable with Tab and Enter',
          'Active state clearly indicated',
          'Badge counts are announced by screen readers',
        ]}
      />

      {/* Empty State */}
      <ComponentSpec
        name="EmptyState"
        description="Display when no data is available, with optional action to help users get started."
        importPath="@/app/components/EmptyState"
        examples={
          <div className="p-4 bg-[var(--espai-neutral-050)] rounded-lg">
            <p className="text-sm text-[var(--text-secondary)]">
              See the "Empty State" section in Components tab for full example.
            </p>
          </div>
        }
        props={[
          { name: 'icon', type: 'LucideIcon', required: true, default: '-', description: 'Icon representing the empty state' },
          { name: 'title', type: 'string', required: true, default: '-', description: 'Empty state title' },
          { name: 'description', type: 'string', required: true, default: '-', description: 'Explanation or guidance text' },
          { name: 'action', type: "{ label: string; onClick: () => void }", required: false, default: '-', description: 'Optional action button' },
        ]}
        usage={[
          'Use when tables, lists, or sections have no data',
          'Provide helpful guidance on why it\'s empty or what to do next',
          'Include action button when user can take action to populate data',
          'Keep tone calm and helpful, not alarming',
        ]}
        accessibility={[
          'Clear heading and description',
          'Action button is keyboard accessible',
          'Icon is decorative and not relied upon for meaning',
        ]}
      />
    </div>
  );
}

// Helper component for specs

interface ComponentSpecProps {
  name: string;
  description: string;
  importPath: string;
  examples: React.ReactNode;
  props: Array<{
    name: string;
    type: string;
    required: boolean;
    default: string;
    description: string;
  }>;
  usage: string[];
  accessibility: string[];
}

function ComponentSpec({ 
  name, 
  description, 
  importPath, 
  examples, 
  props, 
  usage, 
  accessibility 
}: ComponentSpecProps) {
  return (
    <div className="border border-[var(--border-subtle)] rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-[var(--espai-neutral-050)] px-6 py-4 border-b border-[var(--border-subtle)]">
        <h3 className="mb-2">{name}</h3>
        <p className="text-sm text-[var(--text-secondary)] mb-3">{description}</p>
        <div className="bg-[var(--bg-surface)] px-3 py-2 rounded border border-[var(--border-subtle)] espai-metric text-xs text-[var(--text-primary)]">
          import {'{'} {name} {'}'} from "{importPath}";
        </div>
      </div>

      {/* Examples */}
      <div className="px-6 py-6 border-b border-[var(--border-subtle)]">
        <h4 className="mb-4">Examples</h4>
        {examples}
      </div>

      {/* Props */}
      <div className="px-6 py-6 border-b border-[var(--border-subtle)]">
        <h4 className="mb-4">Props</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border-subtle)]">
                <th className="text-left py-2 pr-4 text-[var(--text-muted)] font-medium">Prop</th>
                <th className="text-left py-2 pr-4 text-[var(--text-muted)] font-medium">Type</th>
                <th className="text-left py-2 pr-4 text-[var(--text-muted)] font-medium">Required</th>
                <th className="text-left py-2 pr-4 text-[var(--text-muted)] font-medium">Default</th>
                <th className="text-left py-2 text-[var(--text-muted)] font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              {props.map((prop) => (
                <tr key={prop.name}>
                  <td className="py-3 pr-4">
                    <code className="espai-metric text-xs bg-[var(--espai-neutral-050)] px-2 py-1 rounded text-[var(--text-primary)]">
                      {prop.name}
                    </code>
                  </td>
                  <td className="py-3 pr-4">
                    <code className="text-xs text-[var(--text-secondary)]">{prop.type}</code>
                  </td>
                  <td className="py-3 pr-4">
                    {prop.required ? (
                      <span className="text-xs font-medium text-[var(--espai-critical-600)]">Required</span>
                    ) : (
                      <span className="text-xs text-[var(--text-muted)]">Optional</span>
                    )}
                  </td>
                  <td className="py-3 pr-4">
                    <code className="espai-metric text-xs text-[var(--text-muted)]">{prop.default}</code>
                  </td>
                  <td className="py-3 text-[var(--text-secondary)]">{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="px-6 py-6 border-b border-[var(--border-subtle)]">
        <h4 className="mb-4">Usage Guidelines</h4>
        <ul className="space-y-2">
          {usage.map((item, index) => (
            <li key={index} className="flex gap-2 text-sm text-[var(--text-secondary)]">
              <span className="text-[var(--espai-focus-600)] mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Accessibility */}
      <div className="px-6 py-6">
        <h4 className="mb-4">Accessibility</h4>
        <ul className="space-y-2">
          {accessibility.map((item, index) => (
            <li key={index} className="flex gap-2 text-sm text-[var(--text-secondary)]">
              <span className="text-[var(--espai-support-600)] mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
