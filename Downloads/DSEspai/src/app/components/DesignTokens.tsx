export function DesignTokens() {
  return (
    <div className="space-y-16">
      {/* Colors */}
      <section>
        <h2 className="mb-3">Color Tokens</h2>
        <p className="text-[var(--text-secondary)] mb-8 max-w-3xl">
          Espai uses a minimalist, calm color palette. Each color is used with intentional meaning to reduce cognitive load and avoid unnecessary alarm.
        </p>

        {/* Neutral Foundation */}
        <div className="mb-10">
          <h3 className="mb-4">Neutral — Foundation</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-6">
            Used for backgrounds, borders, text, and UI structure. The foundation of all layouts.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <ColorToken name="espai-neutral-050" hex="#F8F9FA" usage="Subtle backgrounds" />
            <ColorToken name="espai-neutral-100" hex="#F1F3F5" usage="Hover states" />
            <ColorToken name="espai-neutral-200" hex="#E9ECEF" usage="Borders, dividers" />
            <ColorToken name="espai-neutral-300" hex="#DEE2E6" usage="Active borders" />
            <ColorToken name="espai-neutral-400" hex="#CED4DA" usage="Disabled text" />
            <ColorToken name="espai-neutral-500" hex="#ADB5BD" usage="Muted text" />
            <ColorToken name="espai-neutral-600" hex="#868E96" usage="Secondary text" />
            <ColorToken name="espai-neutral-700" hex="#495057" usage="Body text" />
            <ColorToken name="espai-neutral-800" hex="#343A40" usage="Headings" />
            <ColorToken name="espai-neutral-900" hex="#212529" usage="High emphasis" />
          </div>
        </div>

        {/* Focus Blue */}
        <div className="mb-10">
          <h3 className="mb-4">Focus Blue — Primary Accent</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-6">
            Used for primary actions, navigation, and interactive elements. Signals "this is important and actionable."
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <ColorToken name="espai-focus-300" hex="#A5D8FF" usage="Light backgrounds" />
            <ColorToken name="espai-focus-400" hex="#74C0FC" usage="Hover states" />
            <ColorToken name="espai-focus-500" hex="#4DABF7" usage="Pressed states" />
            <ColorToken name="espai-focus-600" hex="#339AF0" usage="Primary actions" />
            <ColorToken name="espai-focus-700" hex="#1C7ED6" usage="Active states" />
          </div>
        </div>

        {/* Calm Teal */}
        <div className="mb-10">
          <h3 className="mb-4">Calm Teal — Supportive Secondary</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-6">
            Used for positive signals, success states, and upward trends. Signals "this is good, stable, or growing."
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <ColorToken name="espai-support-300" hex="#96F2D7" usage="Light backgrounds" />
            <ColorToken name="espai-support-400" hex="#63E6BE" usage="Success states" />
            <ColorToken name="espai-support-500" hex="#38D9A9" usage="Hover states" />
            <ColorToken name="espai-support-600" hex="#20C997" usage="Success indicators" />
            <ColorToken name="espai-support-700" hex="#12B886" usage="Active states" />
          </div>
        </div>

        {/* Soft Signal */}
        <div className="mb-10">
          <h3 className="mb-4">Soft Signal — Attention Without Alarm</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-6">
            Used for warnings and things that need attention. Not urgent, but notable. Signals "pay attention to this, but stay calm."
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <ColorToken name="espai-signal-300" hex="#FFD43B" usage="Light backgrounds" />
            <ColorToken name="espai-signal-400" hex="#FCC419" usage="Warning states" />
            <ColorToken name="espai-signal-500" hex="#FAB005" usage="Hover states" />
            <ColorToken name="espai-signal-600" hex="#F59F00" usage="Warning indicators" />
            <ColorToken name="espai-signal-700" hex="#E67700" usage="Active states" />
          </div>
        </div>

        {/* Measured Red */}
        <div className="mb-10">
          <h3 className="mb-4">Measured Red — Critical (Rare Use)</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-6">
            Reserved for truly critical states that require immediate action. Used sparingly to maintain calm. Signals "this requires urgent action."
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <ColorToken name="espai-critical-300" hex="#FFA8A8" usage="Light backgrounds" />
            <ColorToken name="espai-critical-400" hex="#FF8787" usage="Error states" />
            <ColorToken name="espai-critical-500" hex="#FF6B6B" usage="Hover states" />
            <ColorToken name="espai-critical-600" hex="#FA5252" usage="Critical indicators" />
            <ColorToken name="espai-critical-700" hex="#F03E3E" usage="Active states" />
          </div>
        </div>

        {/* Semantic Tokens */}
        <div className="mb-10">
          <h3 className="mb-4">Semantic Tokens</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-6">
            Context-specific color assignments for consistent usage across the system.
          </p>
          <div className="space-y-4">
            <SemanticToken 
              category="Background"
              tokens={[
                { name: 'bg-default', value: '#FFFFFF', usage: 'Page background' },
                { name: 'bg-surface', value: '#FFFFFF', usage: 'Card/panel background' },
                { name: 'bg-overlay', value: 'rgba(0, 0, 0, 0.5)', usage: 'Modal overlay' },
              ]}
            />
            <SemanticToken 
              category="Text"
              tokens={[
                { name: 'text-primary', value: '#212529', usage: 'Headings, primary content' },
                { name: 'text-secondary', value: '#495057', usage: 'Body text, descriptions' },
                { name: 'text-muted', value: '#868E96', usage: 'Labels, captions' },
              ]}
            />
            <SemanticToken 
              category="Border"
              tokens={[
                { name: 'border-subtle', value: '#E9ECEF', usage: 'Default borders' },
                { name: 'border-moderate', value: '#DEE2E6', usage: 'Emphasized borders' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="mb-3">Typography Specifications</h2>
        <p className="text-[var(--text-secondary)] mb-8 max-w-3xl">
          Three typefaces work together: Inter for UI and body text, Fraunces for insight headlines, and JetBrains Mono for metrics and data.
        </p>

        <div className="space-y-8">
          {/* Headings */}
          <div>
            <h3 className="mb-6">Headings — Inter</h3>
            <div className="space-y-4">
              <TypeSpec 
                level="h1" 
                sample="Primary Page Title"
                size="32px / 2rem"
                lineHeight="40px / 2.5rem"
                weight="700 (Bold)"
                letterSpacing="-0.02em"
                usage="Page titles, primary headings"
              />
              <TypeSpec 
                level="h2" 
                sample="Section Heading"
                size="24px / 1.5rem"
                lineHeight="32px / 2rem"
                weight="700 (Bold)"
                letterSpacing="-0.01em"
                usage="Section titles, card headers"
              />
              <TypeSpec 
                level="h3" 
                sample="Subsection Heading"
                size="20px / 1.25rem"
                lineHeight="28px / 1.75rem"
                weight="600 (Semi-Bold)"
                letterSpacing="-0.01em"
                usage="Subsection titles"
              />
              <TypeSpec 
                level="h4" 
                sample="Component Heading"
                size="16px / 1rem"
                lineHeight="24px / 1.5rem"
                weight="600 (Semi-Bold)"
                letterSpacing="normal"
                usage="Small component headers"
              />
            </div>
          </div>

          {/* Body Text */}
          <div>
            <h3 className="mb-6">Body Text — Inter</h3>
            <div className="space-y-4">
              <TypeSpec 
                level="body-lg" 
                sample="Large body text for introductions and important paragraphs. This provides emphasis while maintaining readability."
                size="18px / 1.125rem"
                lineHeight="28px / 1.75rem"
                weight="400 (Regular)"
                letterSpacing="normal"
                usage="Lead paragraphs, emphasis"
              />
              <TypeSpec 
                level="body" 
                sample="Standard body text for paragraphs and most content. This is the most common text size used throughout the interface."
                size="16px / 1rem"
                lineHeight="24px / 1.5rem"
                weight="400 (Regular)"
                letterSpacing="normal"
                usage="Default body text"
              />
              <TypeSpec 
                level="body-sm" 
                sample="Smaller text for secondary information, captions, and supporting details."
                size="14px / 0.875rem"
                lineHeight="20px / 1.25rem"
                weight="400 (Regular)"
                letterSpacing="normal"
                usage="Captions, labels, metadata"
              />
              <TypeSpec 
                level="body-xs" 
                sample="Extra small text for fine print and tertiary information."
                size="12px / 0.75rem"
                lineHeight="16px / 1rem"
                weight="400 (Regular)"
                letterSpacing="normal"
                usage="Fine print, timestamps"
              />
            </div>
          </div>

          {/* Insight Headlines */}
          <div>
            <h3 className="mb-6">Insight Headlines — Fraunces</h3>
            <div className="space-y-4">
              <TypeSpec 
                level="insight-headline" 
                sample="Revenue declined 18% in enterprise accounts"
                size="24px / 1.5rem"
                lineHeight="32px / 2rem"
                weight="600 (Semi-Bold)"
                letterSpacing="normal"
                usage="Data-driven insights, key findings"
                fontFamily="Fraunces"
              />
            </div>
            <p className="text-sm text-[var(--text-secondary)] mt-4 p-4 bg-[var(--espai-neutral-050)] rounded-lg">
              <strong>Usage rule:</strong> Fraunces is reserved exclusively for insight headlines. Never use for UI labels, buttons, or body text.
            </p>
          </div>

          {/* Metrics */}
          <div>
            <h3 className="mb-6">Metrics & Data — JetBrains Mono</h3>
            <div className="space-y-4">
              <TypeSpec 
                level="metric-lg" 
                sample="$847,392"
                size="48px / 3rem"
                lineHeight="56px / 3.5rem"
                weight="600 (Semi-Bold)"
                letterSpacing="normal"
                usage="Hero metrics, primary KPIs"
                fontFamily="JetBrains Mono"
              />
              <TypeSpec 
                level="metric" 
                sample="$340,000"
                size="32px / 2rem"
                lineHeight="40px / 2.5rem"
                weight="600 (Semi-Bold)"
                letterSpacing="normal"
                usage="Card metrics, data points"
                fontFamily="JetBrains Mono"
              />
              <TypeSpec 
                level="metric-sm" 
                sample="127"
                size="20px / 1.25rem"
                lineHeight="28px / 1.75rem"
                weight="500 (Medium)"
                letterSpacing="normal"
                usage="Small metrics, inline data"
                fontFamily="JetBrains Mono"
              />
            </div>
            <p className="text-sm text-[var(--text-secondary)] mt-4 p-4 bg-[var(--espai-neutral-050)] rounded-lg">
              <strong>Usage rule:</strong> JetBrains Mono is for numbers, currency, percentages, and data. Never use for prose or UI labels.
            </p>
          </div>
        </div>

        {/* Typography Rules */}
        <div className="mt-12 p-6 bg-[var(--espai-focus-300)] bg-opacity-20 border border-[var(--espai-focus-400)] rounded-lg">
          <h3 className="mb-4">Typography Rules</h3>
          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li className="flex gap-2">
              <span className="text-[var(--espai-focus-600)]">✓</span>
              <span>Use sentence case for all headings and labels</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--espai-critical-600)]">✗</span>
              <span>Never use all caps (reduces readability and feels aggressive)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--espai-critical-600)]">✗</span>
              <span>Never bold entire paragraphs (use sparingly for emphasis)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--espai-focus-600)]">✓</span>
              <span>Maintain generous line height for readability (1.5 minimum)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[var(--espai-focus-600)]">✓</span>
              <span>Use negative letter spacing on large headings (-0.02em)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Spacing */}
      <section>
        <h2 className="mb-3">Spacing Scale</h2>
        <p className="text-[var(--text-secondary)] mb-8 max-w-3xl">
          Generous spacing reduces cognitive load and creates a calm, breathable interface.
        </p>
        <div className="space-y-3">
          <SpacingToken size="xs" value="4px" rem="0.25rem" usage="Tight spacing, icon gaps" />
          <SpacingToken size="sm" value="8px" rem="0.5rem" usage="Small gaps, form fields" />
          <SpacingToken size="md" value="16px" rem="1rem" usage="Default spacing" />
          <SpacingToken size="lg" value="24px" rem="1.5rem" usage="Component spacing" />
          <SpacingToken size="xl" value="32px" rem="2rem" usage="Section spacing" />
          <SpacingToken size="2xl" value="48px" rem="3rem" usage="Large section breaks" />
          <SpacingToken size="3xl" value="64px" rem="4rem" usage="Page-level spacing" />
        </div>
      </section>

      {/* Border Radius */}
      <section>
        <h2 className="mb-3">Border Radius</h2>
        <p className="text-[var(--text-secondary)] mb-8 max-w-3xl">
          Consistent corner rounding creates visual harmony and approachability.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <RadiusToken size="sm" value="4px" usage="Buttons, badges, small elements" />
          <RadiusToken size="md" value="8px" usage="Cards, inputs, panels" />
          <RadiusToken size="lg" value="12px" usage="Large cards, modals" />
          <RadiusToken size="full" value="9999px" usage="Pills, avatars, circular elements" />
        </div>
      </section>
    </div>
  );
}

// Helper Components

function ColorToken({ name, hex, usage }: { name: string; hex: string; usage: string }) {
  return (
    <div className="border border-[var(--border-subtle)] rounded-lg overflow-hidden">
      <div 
        className="h-24 w-full" 
        style={{ backgroundColor: hex }}
      />
      <div className="p-3">
        <div className="espai-metric text-xs text-[var(--text-primary)] mb-1">{hex}</div>
        <div className="text-xs text-[var(--text-muted)] mb-2">var(--{name})</div>
        <div className="text-xs text-[var(--text-secondary)]">{usage}</div>
      </div>
    </div>
  );
}

function SemanticToken({ category, tokens }: { 
  category: string; 
  tokens: Array<{ name: string; value: string; usage: string }> 
}) {
  return (
    <div className="border border-[var(--border-subtle)] rounded-lg overflow-hidden">
      <div className="bg-[var(--espai-neutral-050)] px-4 py-2 border-b border-[var(--border-subtle)]">
        <h4 className="text-sm font-medium text-[var(--text-primary)]">{category}</h4>
      </div>
      <div className="divide-y divide-[var(--border-subtle)]">
        {tokens.map((token) => (
          <div key={token.name} className="px-4 py-3 flex items-center justify-between">
            <div className="flex-1">
              <div className="text-sm font-medium text-[var(--text-primary)] mb-0.5">
                var(--{token.name})
              </div>
              <div className="text-xs text-[var(--text-secondary)]">{token.usage}</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="espai-metric text-xs text-[var(--text-muted)]">{token.value}</div>
              <div 
                className="w-8 h-8 rounded border border-[var(--border-subtle)]"
                style={{ backgroundColor: token.value }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TypeSpec({ 
  level, 
  sample, 
  size, 
  lineHeight, 
  weight, 
  letterSpacing, 
  usage,
  fontFamily = 'Inter'
}: { 
  level: string; 
  sample: string; 
  size: string; 
  lineHeight: string; 
  weight: string; 
  letterSpacing: string; 
  usage: string;
  fontFamily?: string;
}) {
  return (
    <div className="border border-[var(--border-subtle)] rounded-lg p-6">
      <div className="mb-4">
        <div 
          className={`
            text-[var(--text-primary)] mb-4
            ${fontFamily === 'Fraunces' ? 'espai-insight-headline' : ''}
            ${fontFamily === 'JetBrains Mono' ? 'espai-metric' : ''}
          `}
          style={{
            fontSize: size.split('/')[0].trim(),
            lineHeight: lineHeight.split('/')[0].trim(),
            fontWeight: weight.split('(')[0].trim(),
            letterSpacing: letterSpacing === 'normal' ? 'normal' : letterSpacing,
            fontFamily: fontFamily === 'Inter' ? 'Inter, sans-serif' : undefined
          }}
        >
          {sample}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-xs">
        <div>
          <div className="text-[var(--text-muted)] mb-1">Token</div>
          <div className="espai-metric text-[var(--text-primary)]">.{level}</div>
        </div>
        <div>
          <div className="text-[var(--text-muted)] mb-1">Size</div>
          <div className="espai-metric text-[var(--text-primary)]">{size}</div>
        </div>
        <div>
          <div className="text-[var(--text-muted)] mb-1">Line Height</div>
          <div className="espai-metric text-[var(--text-primary)]">{lineHeight}</div>
        </div>
        <div>
          <div className="text-[var(--text-muted)] mb-1">Weight</div>
          <div className="espai-metric text-[var(--text-primary)]">{weight}</div>
        </div>
        <div>
          <div className="text-[var(--text-muted)] mb-1">Spacing</div>
          <div className="espai-metric text-[var(--text-primary)]">{letterSpacing}</div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-[var(--border-subtle)]">
        <div className="text-xs text-[var(--text-muted)] mb-1">Usage</div>
        <div className="text-sm text-[var(--text-secondary)]">{usage}</div>
      </div>
    </div>
  );
}

function SpacingToken({ size, value, rem, usage }: { size: string; value: string; rem: string; usage: string }) {
  return (
    <div className="border border-[var(--border-subtle)] rounded-lg p-4 flex items-center gap-6">
      <div className="bg-[var(--espai-focus-600)] rounded" style={{ width: value, height: value }} />
      <div className="flex-1 grid grid-cols-3 gap-4">
        <div>
          <div className="text-xs text-[var(--text-muted)] mb-1">Token</div>
          <div className="text-sm font-medium text-[var(--text-primary)]">spacing-{size}</div>
        </div>
        <div>
          <div className="text-xs text-[var(--text-muted)] mb-1">Value</div>
          <div className="espai-metric text-sm text-[var(--text-primary)]">{value} / {rem}</div>
        </div>
        <div>
          <div className="text-xs text-[var(--text-muted)] mb-1">Usage</div>
          <div className="text-sm text-[var(--text-secondary)]">{usage}</div>
        </div>
      </div>
    </div>
  );
}

function RadiusToken({ size, value, usage }: { size: string; value: string; usage: string }) {
  return (
    <div className="border border-[var(--border-subtle)] rounded-lg p-4">
      <div 
        className="w-full h-20 bg-[var(--espai-focus-600)] mb-4"
        style={{ borderRadius: value }}
      />
      <div>
        <div className="text-xs text-[var(--text-muted)] mb-1">radius-{size}</div>
        <div className="espai-metric text-sm text-[var(--text-primary)] mb-2">{value}</div>
        <div className="text-xs text-[var(--text-secondary)]">{usage}</div>
      </div>
    </div>
  );
}
