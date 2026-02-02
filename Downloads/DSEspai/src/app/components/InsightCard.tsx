import { TrendingDown, TrendingUp, AlertCircle } from 'lucide-react';

interface InsightCardProps {
  type: 'focus' | 'support' | 'signal' | 'critical';
  headline: string;
  explanation: string;
  metric?: string;
  metricLabel?: string;
  trend?: 'up' | 'down';
  action?: string;
}

export function InsightCard({
  type,
  headline,
  explanation,
  metric,
  metricLabel,
  trend,
  action
}: InsightCardProps) {
  const colorMap = {
    focus: {
      border: 'var(--espai-focus-600)',
      bg: 'var(--espai-focus-300)',
      text: 'var(--espai-focus-600)'
    },
    support: {
      border: 'var(--espai-support-600)',
      bg: 'var(--espai-support-300)',
      text: 'var(--espai-support-600)'
    },
    signal: {
      border: 'var(--espai-signal-600)',
      bg: 'var(--espai-signal-300)',
      text: 'var(--espai-signal-600)'
    },
    critical: {
      border: 'var(--espai-critical-600)',
      bg: 'var(--espai-critical-300)',
      text: 'var(--espai-critical-600)'
    }
  };

  const colors = colorMap[type];

  return (
    <div 
      className="p-8 bg-[var(--bg-surface)] border-l-4 rounded-lg transition-all hover:shadow-sm"
      style={{ borderLeftColor: colors.border }}
    >
      {/* Headline - using display font */}
      <h2 
        className="espai-insight-headline mb-4"
        style={{ color: colors.text }}
      >
        {headline}
      </h2>

      {/* Explanation - body font */}
      <p className="espai-body text-[var(--text-secondary)] mb-6">
        {explanation}
      </p>

      {/* Metric - monospace font */}
      {metric && (
        <div className="flex items-baseline gap-3 mb-6">
          <div className="espai-metric text-4xl" style={{ color: colors.text }}>
            {metric}
          </div>
          {trend && (
            <div className="flex items-center gap-1 text-sm" style={{ color: colors.text }}>
              {trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            </div>
          )}
          {metricLabel && (
            <div className="text-sm text-[var(--text-muted)]">{metricLabel}</div>
          )}
        </div>
      )}

      {/* Action */}
      {action && (
        <div className="flex items-center gap-2 text-sm font-medium" style={{ color: colors.text }}>
          <AlertCircle className="w-4 h-4" />
          <span>{action}</span>
        </div>
      )}
    </div>
  );
}
