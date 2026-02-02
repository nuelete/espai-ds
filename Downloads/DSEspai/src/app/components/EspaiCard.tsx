import { LucideIcon } from 'lucide-react';

interface EspaiCardProps {
  title: string;
  value: string;
  change?: {
    value: string;
    direction: 'up' | 'down' | 'neutral';
    label?: string;
  };
  icon?: LucideIcon;
  iconColor?: 'focus' | 'support' | 'signal' | 'critical' | 'neutral';
  trend?: Array<{ date: string; value: number }>;
  description?: string;
}

export function EspaiCard({ 
  title, 
  value, 
  change, 
  icon: Icon,
  iconColor = 'focus',
  description 
}: EspaiCardProps) {
  const iconColorMap = {
    focus: 'var(--espai-focus-600)',
    support: 'var(--espai-support-600)',
    signal: 'var(--espai-signal-600)',
    critical: 'var(--espai-critical-600)',
    neutral: 'var(--espai-neutral-500)'
  };

  const changeColorMap = {
    up: 'var(--espai-support-600)',
    down: 'var(--espai-signal-600)',
    neutral: 'var(--espai-neutral-500)'
  };

  return (
    <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg p-6 hover:border-[var(--espai-neutral-300)] transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-sm text-[var(--text-secondary)] mb-1">{title}</p>
          <div className="espai-metric text-3xl text-[var(--text-primary)] mb-2">
            {value}
          </div>
          {change && (
            <div 
              className="flex items-center gap-1 text-sm font-medium"
              style={{ color: changeColorMap[change.direction] }}
            >
              <span>{change.value}</span>
              {change.label && (
                <span className="text-[var(--text-muted)] font-normal">{change.label}</span>
              )}
            </div>
          )}
        </div>
        {Icon && (
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ 
              backgroundColor: `${iconColorMap[iconColor]}20`,
              color: iconColorMap[iconColor]
            }}
          >
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>
      {description && (
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">{description}</p>
      )}
    </div>
  );
}

interface EspaiMiniCardProps {
  label: string;
  value: string;
  type?: 'neutral' | 'focus' | 'support' | 'signal' | 'critical';
}

export function EspaiMiniCard({ label, value, type = 'neutral' }: EspaiMiniCardProps) {
  const colorMap = {
    neutral: {
      bg: 'var(--espai-neutral-100)',
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
    <div 
      className="px-4 py-3 rounded-lg"
      style={{ backgroundColor: `${colors.bg}40` }}
    >
      <div className="text-xs text-[var(--text-muted)] mb-1">{label}</div>
      <div className="espai-metric text-xl" style={{ color: colors.text }}>
        {value}
      </div>
    </div>
  );
}
