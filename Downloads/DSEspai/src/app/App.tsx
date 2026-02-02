import { Eye, Compass, MessageSquare, Shield, Layers, Zap, BookOpen, Grid3x3, Palette, FileCode } from 'lucide-react';
import { useState } from 'react';
import { ColorSwatch } from '@/app/components/ColorSwatch';
import { TypographyExample } from '@/app/components/TypographyExample';
import { InsightCard } from '@/app/components/InsightCard';
import { DesignPrinciple } from '@/app/components/DesignPrinciple';
import { ComponentShowcase } from '@/app/components/ComponentShowcase';
import { EspaiNavigation } from '@/app/components/EspaiNavigation';
import { DesignTokens } from '@/app/components/DesignTokens';
import { ComponentSpecs } from '@/app/components/ComponentSpecs';

export default function App() {
  const [activeTab, setActiveTab] = useState<'principles' | 'tokens' | 'components' | 'specs'>('principles');

  return (
    <div className="min-h-screen bg-[var(--bg-default)] flex">
      {/* Sidebar Navigation */}
      <EspaiNavigation />

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Header */}
        <header className="border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] sticky top-0 z-10">
          <div className="px-8 py-6">
            <h1 className="mb-2">Espai Design System</h1>
            <p className="text-[var(--text-secondary)] max-w-3xl mb-6">
              The system of record for customer and revenue risk, designed to explain why revenue is at risk and guide what to do next, grounded in evidence and presented with clarity.
            </p>
            
            {/* Tab Navigation */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('principles')}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${activeTab === 'principles'
                    ? 'bg-[var(--espai-focus-600)] text-white'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--espai-neutral-100)] hover:text-[var(--text-primary)]'
                  }
                `}
              >
                <BookOpen className="w-4 h-4" />
                Principles
              </button>
              <button
                onClick={() => setActiveTab('tokens')}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${activeTab === 'tokens'
                    ? 'bg-[var(--espai-focus-600)] text-white'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--espai-neutral-100)] hover:text-[var(--text-primary)]'
                  }
                `}
              >
                <Palette className="w-4 h-4" />
                Design Tokens
              </button>
              <button
                onClick={() => setActiveTab('components')}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${activeTab === 'components'
                    ? 'bg-[var(--espai-focus-600)] text-white'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--espai-neutral-100)] hover:text-[var(--text-primary)]'
                  }
                `}
              >
                <Grid3x3 className="w-4 h-4" />
                Components
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${activeTab === 'specs'
                    ? 'bg-[var(--espai-focus-600)] text-white'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--espai-neutral-100)] hover:text-[var(--text-primary)]'
                  }
                `}
              >
                <FileCode className="w-4 h-4" />
                Specifications
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-8 py-12">
          {activeTab === 'principles' && <DesignPrinciplesContent />}
          {activeTab === 'tokens' && <DesignTokens />}
          {activeTab === 'components' && <ComponentShowcase />}
          {activeTab === 'specs' && <ComponentSpecs />}
        </main>

        {/* Footer */}
        <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] mt-20">
          <div className="px-8 py-8">
            <p className="text-sm text-[var(--text-muted)]">
              Espai Design System — Relief and clarity, not urgency or alarm
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

function DesignPrinciplesContent() {
  return (
    <>
      {/* UX Principles */}
      <section className="mb-20">
        <div className="mb-8">
          <h2 className="mb-3">UX North Star</h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mb-8">
            Espai should feel like relief and clarity, not urgency or alarm. The experience should reduce cognitive load and help users quickly answer three questions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-[var(--espai-focus-300)] bg-opacity-20 border border-[var(--espai-focus-400)] rounded-lg">
              <h3 className="mb-2 text-[var(--espai-focus-600)]">What matters right now?</h3>
              <p className="text-sm text-[var(--text-secondary)]">Progressive disclosure surfaces the most relevant information at each step</p>
            </div>
            <div className="p-6 bg-[var(--espai-support-300)] bg-opacity-20 border border-[var(--espai-support-400)] rounded-lg">
              <h3 className="mb-2 text-[var(--espai-support-600)]">Why does it matter?</h3>
              <p className="text-sm text-[var(--text-secondary)]">All insights are explainable and evidence-backed</p>
            </div>
            <div className="p-6 bg-[var(--espai-signal-300)] bg-opacity-20 border border-[var(--espai-signal-400)] rounded-lg">
              <h3 className="mb-2 text-[var(--espai-signal-600)]">What should I do next?</h3>
              <p className="text-sm text-[var(--text-secondary)]">Clear narrative structure guides users to action</p>
            </div>
          </div>
        </div>

        <h3 className="mb-6">Core Principles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DesignPrinciple
            icon={<Layers className="w-5 h-5" />}
            title="Progressive disclosure"
            description="Surface only the most relevant information at each step. Avoid overwhelming users with data."
          />
          <DesignPrinciple
            icon={<MessageSquare className="w-5 h-5" />}
            title="Narrative structure"
            description="Present insights as a coherent story rather than a static report. Guide users through understanding."
          />
          <DesignPrinciple
            icon={<Compass className="w-5 h-5" />}
            title="Immediate orientation"
            description="Users should understand where they are and why within seconds. No confusion, no hunting."
          />
          <DesignPrinciple
            icon={<Shield className="w-5 h-5" />}
            title="Trust and transparency"
            description="All insights must be explainable and evidence-backed. Build confidence through clarity."
          />
          <DesignPrinciple
            icon={<Zap className="w-5 h-5" />}
            title="Habit formation"
            description="Small feedback loops that reward regular usage without being intrusive."
          />
          <DesignPrinciple
            icon={<Eye className="w-5 h-5" />}
            title="Calm by design"
            description="Generous spacing, minimalist palette, and subtle interactions create a sense of relief."
          />
        </div>
      </section>

      {/* Color System */}
      <section className="mb-20">
        <div className="mb-8">
          <h2 className="mb-3">Color System</h2>
          <p className="text-[var(--text-secondary)] max-w-3xl">
            A calm, legible, narrative-first palette designed to reduce alert fatigue and support long reading sessions. Color encodes meaning, not urgency.
          </p>
        </div>

        {/* Neutrals */}
        <div className="mb-12">
          <h3 className="mb-4">Neutrals — The Foundation</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-6">90% of the UI. These define the emotional baseline.</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <ColorSwatch name="Neutral 900" variable="--espai-neutral-900" hex="#1C2330" usage="Primary text" />
            <ColorSwatch name="Neutral 700" variable="--espai-neutral-700" hex="#3A4358" usage="Secondary text" />
            <ColorSwatch name="Neutral 500" variable="--espai-neutral-500" hex="#7D8699" usage="Muted text" />
            <ColorSwatch name="Neutral 300" variable="--espai-neutral-300" hex="#C9CFDA" usage="Borders" />
            <ColorSwatch name="Neutral 200" variable="--espai-neutral-200" hex="#E4E7EE" usage="Dividers" />
            <ColorSwatch name="Neutral 100" variable="--espai-neutral-100" hex="#F2F4F8" usage="Subtle backgrounds" />
            <ColorSwatch name="Neutral 050" variable="--espai-neutral-050" hex="#F8F9FB" usage="Main background" />
          </div>
        </div>

        {/* Primary Accent */}
        <div className="mb-12">
          <h3 className="mb-4">Focus Blue — Primary Accent</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-6">Used to say "this matters", never "panic". For primary insights and selected states.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ColorSwatch name="Focus 600" variable="--espai-focus-600" hex="#3B6EEA" usage="Primary focus" />
            <ColorSwatch name="Focus 500" variable="--espai-focus-500" hex="#5A86F2" />
            <ColorSwatch name="Focus 400" variable="--espai-focus-400" hex="#8CA8F7" />
            <ColorSwatch name="Focus 300" variable="--espai-focus-300" hex="#C4D3FB" />
          </div>
        </div>

        {/* Support */}
        <div className="mb-12">
          <h3 className="mb-4">Calm Teal — Supportive Secondary</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-6">Used for context, not action. Secondary insights and trend directions.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ColorSwatch name="Support 600" variable="--espai-support-600" hex="#2F8F83" />
            <ColorSwatch name="Support 500" variable="--espai-support-500" hex="#4FA89C" />
            <ColorSwatch name="Support 400" variable="--espai-support-400" hex="#8BC6BC" />
            <ColorSwatch name="Support 300" variable="--espai-support-300" hex="#CFEAE6" />
          </div>
        </div>

        {/* Signal */}
        <div className="mb-12">
          <h3 className="mb-4">Soft Signal — Attention Without Alarm</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-6">Emerging risks and "keep an eye on this" moments. Never blinking, never full backgrounds.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ColorSwatch name="Signal 600" variable="--espai-signal-600" hex="#C08A3E" usage="Muted amber" />
            <ColorSwatch name="Signal 500" variable="--espai-signal-500" hex="#D1A15A" />
            <ColorSwatch name="Signal 400" variable="--espai-signal-400" hex="#E4C690" />
            <ColorSwatch name="Signal 300" variable="--espai-signal-300" hex="#F3E7CC" />
          </div>
        </div>

        {/* Critical */}
        <div className="mb-12">
          <h3 className="mb-4">Measured Red — Critical (Rare)</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-6">Only when immediate action is required. Expected usage {"<"}1% of UI. If everything is critical, nothing is.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ColorSwatch name="Critical 600" variable="--espai-critical-600" hex="#B94A48" />
            <ColorSwatch name="Critical 500" variable="--espai-critical-500" hex="#D16A67" />
            <ColorSwatch name="Critical 400" variable="--espai-critical-400" hex="#E7A3A1" />
            <ColorSwatch name="Critical 300" variable="--espai-critical-300" hex="#F4D6D5" />
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="mb-20">
        <div className="mb-8">
          <h2 className="mb-3">Typography</h2>
          <p className="text-[var(--text-secondary)] max-w-3xl mb-6">
            Clarity over cleverness. A typographic system built for long-form readability, calm authority, and excellent numeric display.
          </p>
          <div className="bg-[var(--espai-signal-300)] bg-opacity-30 border border-[var(--espai-signal-400)] rounded-lg p-6 mb-8">
            <h4 className="mb-3 text-[var(--espai-signal-600)]">Non-negotiable Rules</h4>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>• No all-caps (ever)</li>
              <li>• No bold paragraphs</li>
              <li>• Headline ≠ label (write sentences, not nouns)</li>
              <li>• Metrics never compete visually with insights</li>
              <li>• White space is part of the typography</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <TypographyExample
            label="Display / Insight Headlines"
            fontFamily="--font-display"
            fontSize="--text-2xl"
            fontWeight="--font-weight-medium"
            lineHeight="1.3"
            usage="Fraunces (soft serif). Used only for insight headlines, narrative titles, and 'This matters because...' statements. Never for navigation or metrics."
            example="Revenue from Enterprise customers declined 12% this quarter"
          />

          <TypographyExample
            label="Section Headers"
            fontFamily="--font-body"
            fontSize="--text-xl"
            fontWeight="--font-weight-medium"
            lineHeight="1.4"
            usage="Inter. Used for section headers and subsections."
            example="Key drivers of customer churn"
          />

          <TypographyExample
            label="Body Text"
            fontFamily="--font-body"
            fontSize="--text-md"
            fontWeight="--font-weight-normal"
            lineHeight="1.6"
            usage="Inter Regular. The workhorse of the system. Long-form explanations, insight context, and narrative flow."
            example="The decline is primarily driven by three accounts that reduced their contract value during renewal. This represents a shift from expansion to contraction that emerged over the past 45 days."
          />

          <TypographyExample
            label="Labels & UI Text"
            fontFamily="--font-body"
            fontSize="--text-sm"
            fontWeight="--font-weight-medium"
            lineHeight="1.5"
            usage="Inter Medium. Labels, navigation, and UI controls."
            example="Customer health score"
          />

          <TypographyExample
            label="Numbers & Metrics"
            fontFamily="--font-mono"
            fontSize="--text-2xl"
            fontWeight="--font-weight-medium"
            lineHeight="1.2"
            usage="JetBrains Mono. Used only for key metrics, time series labels, and confidence ranges. Signals 'data' without shouting."
            example="$847,293"
          />
        </div>
      </section>

      {/* Insight Cards in Action */}
      <section className="mb-20">
        <div className="mb-8">
          <h2 className="mb-3">Components in Action</h2>
          <p className="text-[var(--text-secondary)] max-w-3xl">
            See how the design system comes together to create calm, narrative-driven experiences.
          </p>
        </div>

        <div className="space-y-6">
          <InsightCard
            type="focus"
            headline="Three Enterprise accounts are showing signs of disengagement"
            explanation="Acme Corp, GlobalTech, and Innovate Inc have reduced their active user count by an average of 32% over the past 30 days. This pattern typically precedes contract downgrades or churn."
            metric="32%"
            metricLabel="avg. user decline"
            trend="down"
            action="Review account health and schedule check-ins"
          />

          <InsightCard
            type="support"
            headline="Mid-market segment shows stable growth trajectory"
            explanation="Companies with 50-200 employees continue to expand usage at a healthy rate. Feature adoption in this segment is 2.3× higher than enterprise."
            metric="+23%"
            metricLabel="QoQ growth"
            trend="up"
            action="Consider targeting similar profiles"
          />

          <InsightCard
            type="signal"
            headline="Support ticket volume increased for payment workflows"
            explanation="We've seen a 45% increase in tickets related to payment processing over the past two weeks. While not critical yet, this warrants investigation."
            metric="45%"
            metricLabel="ticket increase"
            trend="up"
            action="Keep monitoring — investigate if trend continues"
          />

          <InsightCard
            type="critical"
            headline="TechVentures contract expires in 7 days without renewal"
            explanation="This $340K annual contract has not been renewed. Last contact was 23 days ago. No response to recent outreach attempts."
            metric="$340K"
            metricLabel="at risk"
            action="Escalate to executive team immediately"
          />
        </div>
      </section>

      {/* Design Intent */}
      <section className="mb-12">
        <div className="p-8 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg">
          <h3 className="mb-4">Design Intent</h3>
          <div className="space-y-4 text-[var(--text-secondary)]">
            <p>
              UX and UI are not treated as cosmetic layers but as foundational elements of product differentiation. Every decision in this system supports the core promise: <strong className="text-[var(--text-primary)]">explain why revenue is at risk and guide what to do next</strong>.
            </p>
            <p>
              The visual language is deliberately calm. Generous spacing provides breathing room. The minimalist color palette avoids aggressive alerting. Clear typographic hierarchy guides the eye naturally through complex information.
            </p>
            <p>
              This is not a dashboard. It's not a report. It's a system that helps people make confident decisions about their most important business relationships.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}