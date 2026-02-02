export interface DesignPrincipleProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function DesignPrinciple({ title, description, icon }: DesignPrincipleProps) {
  return (
    <div className="flex gap-4 p-6 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg hover:border-[var(--espai-focus-400)] transition-colors">
      {icon && (
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--espai-focus-300)] text-[var(--espai-focus-600)]">
          {icon}
        </div>
      )}
      <div className="flex-1">
        <h4 className="mb-2 text-[var(--text-primary)]">{title}</h4>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
