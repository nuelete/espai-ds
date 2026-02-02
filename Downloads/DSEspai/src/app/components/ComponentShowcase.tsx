import { DollarSign, TrendingDown, Users, AlertTriangle, Mail, Calendar, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { EspaiCard, EspaiMiniCard } from './EspaiCard';
import { EspaiTable, StatusBadge, MetricCell, AccountCell } from './EspaiTable';
import { ChartWrapper, EspaiLineChart, EspaiAreaChart, EspaiBarChart } from './EspaiChart';
import { ProgressiveDisclosure, DetailRow } from './ProgressiveDisclosure';
import { EspaiButton } from './EspaiButton';
import { EmptyState } from './EmptyState';
import { DemoApplication } from './DemoApplication';

export function ComponentShowcase() {
  const [showDemo, setShowDemo] = useState(false);

  if (showDemo) {
    return (
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2>Live Demo Application</h2>
          <EspaiButton 
            variant="ghost" 
            onClick={() => setShowDemo(false)}
          >
            ← Back to Components
          </EspaiButton>
        </div>
        <DemoApplication />
      </div>
    );
  }

  // Sample data for tables
  const accountsData = [
    {
      id: '1',
      name: 'Acme Corporation',
      industry: 'Technology',
      arr: '$340,000',
      health: 'At Risk',
      healthType: 'critical' as const,
      trend: 'down' as const,
      lastContact: '23 days ago'
    },
    {
      id: '2',
      name: 'GlobalTech Industries',
      industry: 'Manufacturing',
      arr: '$180,000',
      health: 'Needs Attention',
      healthType: 'signal' as const,
      trend: 'down' as const,
      lastContact: '12 days ago'
    },
    {
      id: '3',
      name: 'Innovate Inc',
      industry: 'Finance',
      arr: '$520,000',
      health: 'Healthy',
      healthType: 'support' as const,
      trend: 'up' as const,
      lastContact: '3 days ago'
    },
    {
      id: '4',
      name: 'StartupCo',
      industry: 'Technology',
      arr: '$95,000',
      health: 'Expanding',
      healthType: 'focus' as const,
      trend: 'up' as const,
      lastContact: '1 day ago'
    }
  ];

  // Sample data for charts
  const revenueData = [
    { date: 'Jan', value: 850000, comparison: 780000 },
    { date: 'Feb', value: 920000, comparison: 810000 },
    { date: 'Mar', value: 880000, comparison: 840000 },
    { date: 'Apr', value: 940000, comparison: 870000 },
    { date: 'May', value: 910000, comparison: 900000 },
    { date: 'Jun', value: 870000, comparison: 920000 }
  ];

  const healthScoreData = [
    { date: 'Week 1', value: 78 },
    { date: 'Week 2', value: 82 },
    { date: 'Week 3', value: 79 },
    { date: 'Week 4', value: 75 },
    { date: 'Week 5', value: 71 },
    { date: 'Week 6', value: 68 }
  ];

  const churnRiskData = [
    { name: 'Enterprise', value: 12 },
    { name: 'Mid-Market', value: 8 },
    { name: 'SMB', value: 23 },
    { name: 'Startup', value: 15 }
  ];

  return (
    <div className="space-y-12">
      {/* Metric Cards */}
      <section>
        <h2 className="mb-6">Metric Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <EspaiCard
            title="Revenue at Risk"
            value="$847K"
            change={{ value: '+12%', direction: 'down', label: 'vs last month' }}
            icon={DollarSign}
            iconColor="critical"
            description="3 accounts showing signs of disengagement"
          />
          <EspaiCard
            title="Accounts Monitored"
            value="127"
            change={{ value: '+3', direction: 'up', label: 'this week' }}
            icon={Users}
            iconColor="focus"
          />
          <EspaiCard
            title="Avg Health Score"
            value="68"
            change={{ value: '-7 pts', direction: 'down', label: 'declining' }}
            icon={TrendingDown}
            iconColor="signal"
          />
          <EspaiCard
            title="Action Required"
            value="5"
            icon={AlertTriangle}
            iconColor="signal"
            description="Needs immediate attention"
          />
        </div>

        <h3 className="mb-4 mt-8">Mini Cards</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <EspaiMiniCard label="Critical" value="3" type="critical" />
          <EspaiMiniCard label="At Risk" value="8" type="signal" />
          <EspaiMiniCard label="Healthy" value="89" type="support" />
          <EspaiMiniCard label="Expanding" value="27" type="focus" />
        </div>
      </section>

      {/* Tables */}
      <section>
        <h2 className="mb-6">Data Tables</h2>
        <EspaiTable
          title="Revenue at Risk — Top Priority Accounts"
          description="Accounts requiring immediate attention, sorted by revenue impact"
          columns={[
            {
              key: 'name',
              label: 'Account',
              width: '25%',
              render: (value, row) => (
                <AccountCell 
                  name={value} 
                  subtitle={row.industry}
                />
              )
            },
            {
              key: 'arr',
              label: 'ARR',
              width: '15%',
              render: (value, row) => (
                <MetricCell 
                  value={value} 
                  trend={row.trend}
                />
              )
            },
            {
              key: 'health',
              label: 'Health Status',
              width: '20%',
              render: (value, row) => (
                <StatusBadge 
                  status={value} 
                  type={row.healthType}
                />
              )
            },
            {
              key: 'lastContact',
              label: 'Last Contact',
              width: '20%',
              render: (value) => (
                <span className="text-[var(--text-secondary)]">{value}</span>
              )
            }
          ]}
          data={accountsData}
          onRowClick={(row) => console.log('Clicked:', row.name)}
        />
      </section>

      {/* Charts */}
      <section>
        <h2 className="mb-6">Data Visualizations</h2>
        
        <div className="grid grid-cols-1 gap-6">
          <ChartWrapper
            title="Monthly Recurring Revenue"
            description="Comparing current year vs. previous year performance"
            insight={{
              text: "Revenue declined 4.8% in June compared to forecast. Three enterprise accounts reduced their contract value during renewal.",
              type: 'signal'
            }}
          >
            <EspaiLineChart
              data={revenueData}
              dataKey="value"
              dataLabel="2026"
              comparisonKey="comparison"
              comparisonLabel="2025"
              color="var(--espai-focus-600)"
              comparisonColor="var(--espai-neutral-400)"
            />
          </ChartWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartWrapper
              title="Average Health Score Trend"
              description="6-week rolling average across all accounts"
              insight={{
                text: "Health scores have declined 13% over the past 6 weeks, primarily driven by reduced engagement in the Enterprise segment.",
                type: 'signal'
              }}
            >
              <EspaiAreaChart
                data={healthScoreData}
                dataKey="value"
                dataLabel="Health Score"
                color="var(--espai-signal-600)"
              />
            </ChartWrapper>

            <ChartWrapper
              title="Churn Risk by Segment"
              description="Number of accounts at risk in each segment"
              insight={{
                text: "SMB segment shows higher churn risk but represents lower revenue impact compared to Enterprise accounts.",
                type: 'focus'
              }}
            >
              <EspaiBarChart
                data={churnRiskData}
                dataKey="value"
                dataLabel="At Risk Accounts"
                color="var(--espai-critical-600)"
              />
            </ChartWrapper>
          </div>
        </div>
      </section>

      {/* Progressive Disclosure */}
      <section>
        <h2 className="mb-6">Progressive Disclosure</h2>
        <div className="space-y-4">
          <ProgressiveDisclosure
            summary="Acme Corporation shows declining engagement"
            summaryMetric="$340K at risk"
            type="critical"
          >
            <div className="space-y-4">
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                This account has shown a 32% decline in active users over the past 30 days. 
                Contract expires in 7 days with no renewal conversation scheduled.
              </p>
              <div className="space-y-0">
                <DetailRow 
                  label="Annual Contract Value" 
                  value="$340,000" 
                />
                <DetailRow 
                  label="Active Users" 
                  value="47" 
                  subtext="Down from 69 last month"
                />
                <DetailRow 
                  label="Last Login" 
                  value="23 days ago" 
                />
                <DetailRow 
                  label="Support Tickets" 
                  value="3 open" 
                  subtext="2 unresolved for 14+ days"
                />
              </div>
              <div className="flex gap-3 mt-6">
                <EspaiButton variant="primary" icon={Mail} size="sm">
                  Send Check-in Email
                </EspaiButton>
                <EspaiButton variant="secondary" icon={Calendar} size="sm">
                  Schedule Call
                </EspaiButton>
              </div>
            </div>
          </ProgressiveDisclosure>

          <ProgressiveDisclosure
            summary="GlobalTech Industries reduced feature usage"
            summaryMetric="$180K"
            type="signal"
          >
            <div className="space-y-4">
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Feature adoption has decreased by 28% over the past 45 days. This is a leading indicator of potential churn.
              </p>
              <div className="space-y-0">
                <DetailRow 
                  label="Annual Contract Value" 
                  value="$180,000" 
                />
                <DetailRow 
                  label="Feature Adoption Rate" 
                  value="42%" 
                  subtext="Down from 70%"
                />
                <DetailRow 
                  label="Last Contact" 
                  value="12 days ago" 
                />
              </div>
            </div>
          </ProgressiveDisclosure>

          <ProgressiveDisclosure
            summary="Innovate Inc expanding usage consistently"
            summaryMetric="$520K"
            type="support"
            defaultOpen={false}
          >
            <div className="space-y-4">
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                This account shows strong expansion signals with 23% increase in active users and 15% growth in feature adoption.
              </p>
              <div className="space-y-0">
                <DetailRow 
                  label="Annual Contract Value" 
                  value="$520,000" 
                />
                <DetailRow 
                  label="Active Users" 
                  value="156" 
                  subtext="Up from 127 last quarter"
                />
                <DetailRow 
                  label="Health Score" 
                  value="89" 
                />
              </div>
            </div>
          </ProgressiveDisclosure>
        </div>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="mb-6">Buttons</h2>
        <div className="space-y-6">
          <div>
            <h4 className="mb-4">Variants</h4>
            <div className="flex flex-wrap gap-3">
              <EspaiButton variant="primary">Primary Action</EspaiButton>
              <EspaiButton variant="secondary">Secondary Action</EspaiButton>
              <EspaiButton variant="ghost">Ghost Action</EspaiButton>
              <EspaiButton variant="signal">Signal Action</EspaiButton>
              <EspaiButton variant="critical">Critical Action</EspaiButton>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Sizes</h4>
            <div className="flex flex-wrap items-center gap-3">
              <EspaiButton size="sm">Small</EspaiButton>
              <EspaiButton size="md">Medium</EspaiButton>
              <EspaiButton size="lg">Large</EspaiButton>
            </div>
          </div>

          <div>
            <h4 className="mb-4">With Icons</h4>
            <div className="flex flex-wrap gap-3">
              <EspaiButton icon={Mail} iconPosition="left">Send Email</EspaiButton>
              <EspaiButton variant="secondary" icon={Calendar} iconPosition="right">
                Schedule Meeting
              </EspaiButton>
            </div>
          </div>

          <div>
            <h4 className="mb-4">States</h4>
            <div className="flex flex-wrap gap-3">
              <EspaiButton disabled>Disabled Button</EspaiButton>
              <EspaiButton variant="secondary" disabled>Disabled Secondary</EspaiButton>
            </div>
          </div>
        </div>
      </section>

      {/* Empty State */}
      <section>
        <h2 className="mb-6">Empty State</h2>
        <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg">
          <EmptyState
            icon={Users}
            title="No accounts at risk"
            description="Great news! All your accounts are healthy and showing positive engagement. We'll notify you immediately if any accounts need attention."
            action={{
              label: "View All Accounts",
              onClick: () => console.log('View all clicked')
            }}
          />
        </div>
      </section>

      {/* Demo Application Teaser */}
      <section>
        <div className="bg-[var(--espai-focus-300)] bg-opacity-20 border-2 border-[var(--espai-focus-400)] rounded-lg p-8">
          <h2 className="mb-3">See Components in Action</h2>
          <p className="text-[var(--text-secondary)] mb-6 max-w-2xl">
            View a complete demo application showing how these components work together to create 
            a calm, narrative-driven revenue risk intelligence platform.
          </p>
          <EspaiButton 
            variant="primary" 
            onClick={() => setShowDemo(true)}
          >
            View Demo Application
          </EspaiButton>
        </div>
      </section>
    </div>
  );
}