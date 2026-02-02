import { ArrowUpDown, ChevronRight, TrendingDown, TrendingUp } from 'lucide-react';

export interface ColumnDef<T> {
  key: keyof T;
  label: string;
  width?: string;
  render?: (value: any, row: T) => React.ReactNode;
}

export interface EspaiTableProps<T> {
  title?: string;
  description?: string;
  columns: ColumnDef<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
  emptyMessage?: string;
}

export function EspaiTable<T extends { id: string | number }>({
  title,
  description,
  columns,
  data,
  onRowClick,
  emptyMessage = 'No data available'
}: EspaiTableProps<T>) {
  return (
    <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg overflow-hidden">
      {/* Table Header */}
      {(title || description) && (
        <div className="px-6 py-5 border-b border-[var(--border-subtle)]">
          {title && <h3 className="mb-1">{title}</h3>}
          {description && (
            <p className="text-sm text-[var(--text-secondary)]">{description}</p>
          )}
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[var(--espai-neutral-050)]">
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className="px-6 py-4 text-left text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider"
                  style={{ width: column.width }}
                >
                  <button className="flex items-center gap-2 hover:text-[var(--text-secondary)] transition-colors">
                    {column.label}
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
              ))}
              {onRowClick && <th className="w-12"></th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-subtle)]">
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (onRowClick ? 1 : 0)}
                  className="px-6 py-12 text-center text-[var(--text-muted)]"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row) => (
                <tr
                  key={row.id}
                  className={`
                    transition-colors
                    ${onRowClick 
                      ? 'hover:bg-[var(--espai-neutral-050)] cursor-pointer' 
                      : ''
                    }
                  `}
                  onClick={() => onRowClick?.(row)}
                >
                  {columns.map((column) => (
                    <td
                      key={String(column.key)}
                      className="px-6 py-5 text-sm"
                    >
                      {column.render 
                        ? column.render(row[column.key], row)
                        : String(row[column.key])
                      }
                    </td>
                  ))}
                  {onRowClick && (
                    <td className="px-6 py-5">
                      <ChevronRight className="w-4 h-4 text-[var(--text-muted)]" />
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Helper Components for common table cells

export interface StatusBadgeProps {
  status: string;
  type?: 'neutral' | 'focus' | 'support' | 'signal' | 'critical';
}

export function StatusBadge({ 
  status, 
  type = 'neutral' 
}: StatusBadgeProps) {
  const colorMap = {
    neutral: {
      bg: 'var(--espai-neutral-200)',
      text: 'var(--espai-neutral-700)'
    },
    focus: {
      bg: 'var(--espai-focus-300)',
      text: 'var(--espai-focus-600)'
    },
    support: {
      bg: 'var(--espai-support-300)',
      text: 'var(--espai-support-600)'
    },
    signal: {
      bg: 'var(--espai-signal-300)',
      text: 'var(--espai-signal-600)'
    },
    critical: {
      bg: 'var(--espai-critical-300)',
      text: 'var(--espai-critical-600)'
    }
  };

  const colors = colorMap[type];

  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {status}
    </span>
  );
}

export function MetricCell({ 
  value, 
  trend, 
  label 
}: { 
  value: string; 
  trend?: 'up' | 'down'; 
  label?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div>
        <div className="espai-metric text-[var(--text-primary)]">{value}</div>
        {label && (
          <div className="text-xs text-[var(--text-muted)] mt-0.5">{label}</div>
        )}
      </div>
      {trend && (
        <div className={trend === 'up' ? 'text-[var(--espai-support-600)]' : 'text-[var(--espai-signal-600)]'}>
          {trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
        </div>
      )}
    </div>
  );
}

export function AccountCell({ 
  name, 
  subtitle 
}: { 
  name: string; 
  subtitle?: string;
}) {
  return (
    <div>
      <div className="font-medium text-[var(--text-primary)]">{name}</div>
      {subtitle && (
        <div className="text-xs text-[var(--text-muted)] mt-0.5">{subtitle}</div>
      )}
    </div>
  );
}
