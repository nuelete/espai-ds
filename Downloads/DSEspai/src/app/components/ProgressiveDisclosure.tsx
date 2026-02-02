import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface ProgressiveDisclosureProps {
  summary: string;
  summaryMetric?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  type?: 'focus' | 'support' | 'signal' | 'critical' | 'neutral';
}

export function ProgressiveDisclosure({ 
  summary, 
  summaryMetric,
  children, 
  defaultOpen = false,
  type = 'neutral'
}: ProgressiveDisclosureProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const borderColorMap = {
    neutral: 'var(--border-subtle)',
    focus: 'var(--espai-focus-400)',
    support: 'var(--espai-support-400)',
    signal: 'var(--espai-signal-400)',
    critical: 'var(--espai-critical-400)'
  };

  return (
    <div 
      className="bg-[var(--bg-surface)] border rounded-lg overflow-hidden transition-colors"
      style={{ borderColor: isOpen ? borderColorMap[type] : 'var(--border-subtle)' }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 hover:bg-[var(--espai-neutral-050)] transition-colors"
      >
        <div className="flex items-center gap-4 flex-1">
          <div className="flex-shrink-0 text-[var(--text-muted)]">
            {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </div>
          <div className="flex-1 text-left">
            <p className="text-[var(--text-primary)] font-medium">{summary}</p>
          </div>
          {summaryMetric && (
            <div className="espai-metric text-lg text-[var(--text-secondary)]">
              {summaryMetric}
            </div>
          )}
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6 border-t border-[var(--border-subtle)]">
          <div className="pt-6">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

interface DetailRowProps {
  label: string;
  value: string;
  subtext?: string;
}

export function DetailRow({ label, value, subtext }: DetailRowProps) {
  return (
    <div className="flex items-start justify-between py-3 border-b border-[var(--border-subtle)] last:border-0">
      <div>
        <div className="text-sm text-[var(--text-secondary)]">{label}</div>
        {subtext && (
          <div className="text-xs text-[var(--text-muted)] mt-1">{subtext}</div>
        )}
      </div>
      <div className="espai-metric text-sm text-[var(--text-primary)]">{value}</div>
    </div>
  );
}
