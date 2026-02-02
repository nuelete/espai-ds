interface ColorSwatchProps {
  name: string;
  variable: string;
  hex: string;
  usage?: string;
}

export function ColorSwatch({ name, variable, hex, usage }: ColorSwatchProps) {
  return (
    <div className="flex flex-col gap-2">
      <div 
        className="h-20 rounded-lg border border-[var(--border-subtle)]"
        style={{ backgroundColor: `var(${variable})` }}
      />
      <div className="flex flex-col gap-0.5">
        <div className="text-sm font-medium text-[var(--text-primary)]">{name}</div>
        <div className="text-xs font-mono text-[var(--text-muted)]">{hex}</div>
        <div className="text-xs text-[var(--text-muted)]">{variable}</div>
        {usage && (
          <div className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">{usage}</div>
        )}
      </div>
    </div>
  );
}
