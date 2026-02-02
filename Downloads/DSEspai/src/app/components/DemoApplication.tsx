import { DollarSign, TrendingDown, Users, AlertTriangle } from 'lucide-react';
import { EspaiCard } from './EspaiCard';
import { EspaiTable, StatusBadge, MetricCell, AccountCell } from './EspaiTable';
import { ChartWrapper, EspaiLineChart } from './EspaiChart';
import { ProgressiveDisclosure, DetailRow } from './ProgressiveDisclosure';
import { InsightCard } from './InsightCard';

export function DemoApplication() {
  // Sample data
  const revenueData = [
    { date: 'Jan', value: 850000, comparison: 780000 },
    { date: 'Feb', value: 920000, comparison: 810000 },
    { date: 'Mar', value: 880000, comparison: 840000 },
    { date: 'Apr', value: 940000, comparison: 870000 },
    { date: 'May', value: 910000, comparison: 900000 },
    { date: 'Jun', value: 870000, comparison: 920000 }
  ];

  const riskAccounts = [
    {
      id: '1',
      name: 'Acme Corporation',
      industry: 'Technology',
      arr: '$340,000',
      health: 'Critical',
      healthType: 'critical' as const,
      trend: 'down' as const,
      lastContact: '23 days ago'
    },
    {
      id: '2',
      name: 'GlobalTech Industries',
      industry: 'Manufacturing',
      arr: '$180,000',
      health: 'At Risk',
      healthType: 'signal' as const,
      trend: 'down' as const,
      lastContact: '12 days ago'
    },
    {
      id: '3',
      name: 'RetailCo',
      industry: 'Retail',
      arr: '$125,000',
      health: 'Needs Attention',
      healthType: 'signal' as const,
      trend: 'down' as const,
      lastContact: '18 days ago'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Overview */}
      <div>
        <h2 className="mb-6">Revenue Risk Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <EspaiCard
            title="Revenue at Risk"
            value="$645K"
            change={{ value: '+18%', direction: 'down', label: 'vs last month' }}
            icon={DollarSign}
            iconColor="critical"
            description="3 accounts require immediate attention"
          />
          <EspaiCard
            title="Critical Accounts"
            value="3"
            icon={AlertTriangle}
            iconColor="critical"
            description="Contracts expiring within 14 days"
          />
          <EspaiCard
            title="Monitoring"
            value="12"
            change={{ value: '+2', direction: 'up', label: 'this week' }}
            icon={Users}
            iconColor="signal"
            description="Accounts showing warning signs"
          />
          <EspaiCard
            title="Avg Health Score"
            value="64"
            change={{ value: '-9 pts', direction: 'down', label: 'declining' }}
            icon={TrendingDown}
            iconColor="signal"
          />
        </div>
      </div>

      {/* Primary Insight */}
      <div>
        <InsightCard
          type="critical"
          headline="Three high-value contracts expire within the next two weeks"
          explanation="Acme Corporation ($340K), GlobalTech Industries ($180K), and RetailCo ($125K) have not renewed their contracts. Combined, this represents $645K in at-risk revenue. Recent engagement data shows declining usage patterns across all three accounts."
          metric="$645K"
          metricLabel="at risk"
          action="Executive outreach required for Acme and GlobalTech"
        />
      </div>

      {/* Revenue Trend */}
      <div>
        <ChartWrapper
          title="Monthly Recurring Revenue Trend"
          description="Tracking performance vs. forecast and previous year"
          insight={{
            text: "Revenue declined 7.4% in June vs. forecast. This is primarily driven by three enterprise contract non-renewals and reduced expansion in the mid-market segment.",
            type: 'signal'
          }}
        >
          <EspaiLineChart
            data={revenueData}
            dataKey="value"
            dataLabel="2026 Actual"
            comparisonKey="comparison"
            comparisonLabel="2026 Forecast"
            color="var(--espai-focus-600)"
            comparisonColor="var(--espai-neutral-400)"
          />
        </ChartWrapper>
      </div>

      {/* Accounts Table with Progressive Disclosure */}
      <div>
        <h3 className="mb-6">Accounts Requiring Action</h3>
        <div className="space-y-4">
          <ProgressiveDisclosure
            summary="Acme Corporation — Contract expires in 7 days"
            summaryMetric="$340K"
            type="critical"
            defaultOpen={true}
          >
            <div className="space-y-4">
              <p className="text-sm text-[var(--text-secondary)]">
                This account has shown a 32% decline in active users over the past 30 days. 
                The decision maker has not responded to three outreach attempts. Contract value 
                represents 18% of this quarter's revenue target.
              </p>
              
              <div className="grid grid-cols-3 gap-4 py-4">
                <div>
                  <div className="text-xs text-[var(--text-muted)] mb-1">Active Users</div>
                  <div className="espai-metric text-2xl text-[var(--espai-critical-600)]">47</div>
                  <div className="text-xs text-[var(--text-muted)]">Down from 69</div>
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] mb-1">Last Login</div>
                  <div className="espai-metric text-2xl text-[var(--text-primary)]">23</div>
                  <div className="text-xs text-[var(--text-muted)]">days ago</div>
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] mb-1">Health Score</div>
                  <div className="espai-metric text-2xl text-[var(--espai-critical-600)]">28</div>
                  <div className="text-xs text-[var(--text-muted)]">Critical</div>
                </div>
              </div>

              <div className="border-t border-[var(--border-subtle)] pt-4">
                <h4 className="mb-3">Recent Activity</h4>
                <div className="space-y-0">
                  <DetailRow 
                    label="Support tickets" 
                    value="3 open" 
                    subtext="2 unresolved for 14+ days"
                  />
                  <DetailRow 
                    label="Feature usage" 
                    value="32% decline" 
                    subtext="Across core workflows"
                  />
                  <DetailRow 
                    label="Last outreach" 
                    value="9 days ago" 
                    subtext="No response received"
                  />
                </div>
              </div>

              <div className="bg-[var(--espai-critical-300)] bg-opacity-30 rounded-lg p-4 mt-4">
                <p className="text-sm font-medium text-[var(--espai-critical-600)] mb-2">
                  Recommended Action
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Escalate to VP of Customer Success. Request executive sponsor call with CEO. 
                  Review product gaps that may be driving dissatisfaction.
                </p>
              </div>
            </div>
          </ProgressiveDisclosure>

          <ProgressiveDisclosure
            summary="GlobalTech Industries — Usage declining, contract expires in 12 days"
            summaryMetric="$180K"
            type="signal"
          >
            <div className="space-y-4">
              <p className="text-sm text-[var(--text-secondary)]">
                Feature adoption decreased 28% over the past 45 days. Primary contact has been 
                responsive but hasn't committed to renewal timing.
              </p>
              
              <div className="space-y-0">
                <DetailRow 
                  label="Annual Contract Value" 
                  value="$180,000" 
                />
                <DetailRow 
                  label="Active Users" 
                  value="89" 
                  subtext="Stable, but reduced activity"
                />
                <DetailRow 
                  label="Feature Adoption" 
                  value="42%" 
                  subtext="Down from 70%"
                />
                <DetailRow 
                  label="Last Contact" 
                  value="12 days ago" 
                  subtext="Scheduled follow-up in 3 days"
                />
              </div>
            </div>
          </ProgressiveDisclosure>

          <ProgressiveDisclosure
            summary="RetailCo — Reduced engagement across team"
            summaryMetric="$125K"
            type="signal"
          >
            <div className="space-y-4">
              <p className="text-sm text-[var(--text-secondary)]">
                Team size reduced from 45 to 32 users over the past 60 days. May indicate 
                organizational changes or budget constraints.
              </p>
              
              <div className="space-y-0">
                <DetailRow 
                  label="Annual Contract Value" 
                  value="$125,000" 
                />
                <DetailRow 
                  label="Active Users" 
                  value="32" 
                  subtext="Down from 45"
                />
                <DetailRow 
                  label="Contract Status" 
                  value="14 days" 
                  subtext="Until expiration"
                />
              </div>
            </div>
          </ProgressiveDisclosure>
        </div>
      </div>

      {/* Summary Table */}
      <div>
        <EspaiTable
          title="All At-Risk Accounts"
          description="Complete list sorted by revenue impact"
          columns={[
            {
              key: 'name',
              label: 'Account',
              width: '30%',
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
              width: '20%',
              render: (value, row) => (
                <MetricCell 
                  value={value} 
                  trend={row.trend}
                />
              )
            },
            {
              key: 'health',
              label: 'Status',
              width: '25%',
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
              width: '25%',
              render: (value) => (
                <span className="text-[var(--text-secondary)]">{value}</span>
              )
            }
          ]}
          data={riskAccounts}
          onRowClick={(row) => console.log('View account:', row.name)}
        />
      </div>
    </div>
  );
}
