interface TypographyExampleProps {
  label: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  usage: string;
  example: string;
}

export function TypographyExample({
  label,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  usage,
  example
}: TypographyExampleProps) {
  return (
    <div className="flex flex-col gap-3 p-6 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="text-sm font-medium text-[var(--text-primary)] mb-1">{label}</div>
          <div className="text-xs text-[var(--text-muted)] space-y-0.5">
            <div>Font: {fontFamily}</div>
            <div>Size: {fontSize} / Weight: {fontWeight} / Line height: {lineHeight}</div>
            <div className="mt-2 text-[var(--text-secondary)]">{usage}</div>
          </div>
        </div>
      </div>
      <div 
        className="pt-4 border-t border-[var(--border-subtle)]"
        style={{
          fontFamily: `var(${fontFamily})`,
          fontSize: `var(${fontSize})`,
          fontWeight: `var(${fontWeight})`,
          lineHeight
        }}
      >
        {example}
      </div>
    </div>
  );
}
