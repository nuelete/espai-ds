import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export interface ChartWrapperProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  insight?: {
    text: string;
    type: 'focus' | 'support' | 'signal' | 'critical';
  };
}

export function ChartWrapper({ title, description, children, insight }: ChartWrapperProps) {
  const insightColors = {
    focus: { bg: 'var(--espai-focus-300)', text: 'var(--espai-focus-600)' },
    support: { bg: 'var(--espai-support-300)', text: 'var(--espai-support-600)' },
    signal: { bg: 'var(--espai-signal-300)', text: 'var(--espai-signal-600)' },
    critical: { bg: 'var(--espai-critical-300)', text: 'var(--espai-critical-600)' }
  };

  return (
    <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg p-6">
      <div className="mb-6">
        <h3 className="mb-1">{title}</h3>
        {description && (
          <p className="text-sm text-[var(--text-secondary)]">{description}</p>
        )}
      </div>

      <div className="mb-6">
        {children}
      </div>

      {insight && (
        <div 
          className="p-4 rounded-lg text-sm"
          style={{ 
            backgroundColor: `${insightColors[insight.type].bg}30`,
            borderLeft: `3px solid ${insightColors[insight.type].text}`
          }}
        >
          <p className="text-[var(--text-secondary)]">{insight.text}</p>
        </div>
      )}
    </div>
  );
}

// Custom Tooltip
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg p-4 shadow-lg">
        <p className="text-sm font-medium text-[var(--text-primary)] mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-[var(--text-secondary)]">{entry.name}:</span>
            <span className="espai-metric text-[var(--text-primary)]">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

interface TimeSeriesData {
  date: string;
  value: number;
  comparison?: number;
}

export interface EspaiLineChartProps {
  data: TimeSeriesData[];
  dataKey: string;
  dataLabel: string;
  comparisonKey?: string;
  comparisonLabel?: string;
  color?: string;
  comparisonColor?: string;
}

export function EspaiLineChart({ 
  data, 
  dataKey, 
  dataLabel,
  comparisonKey,
  comparisonLabel,
  color = 'var(--espai-focus-600)',
  comparisonColor = 'var(--espai-neutral-400)'
}: EspaiLineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid 
          strokeDasharray="3 3" 
          stroke="var(--espai-neutral-200)"
          vertical={false}
        />
        <XAxis 
          dataKey="date" 
          tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
          axisLine={{ stroke: 'var(--espai-neutral-300)' }}
          tickLine={false}
        />
        <YAxis 
          tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
          axisLine={{ stroke: 'var(--espai-neutral-300)' }}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend 
          wrapperStyle={{ paddingTop: '20px' }}
          iconType="circle"
        />
        {comparisonKey && (
          <Line 
            type="monotone" 
            dataKey={comparisonKey} 
            name={comparisonLabel || comparisonKey}
            stroke={comparisonColor} 
            strokeWidth={2}
            dot={false}
            strokeDasharray="5 5"
          />
        )}
        <Line 
          type="monotone" 
          dataKey={dataKey} 
          name={dataLabel}
          stroke={color} 
          strokeWidth={3}
          dot={{ fill: color, r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export interface EspaiAreaChartProps {
  data: TimeSeriesData[];
  dataKey: string;
  dataLabel: string;
  color?: string;
}

export function EspaiAreaChart({ 
  data, 
  dataKey, 
  dataLabel,
  color = 'var(--espai-support-600)'
}: EspaiAreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
            <stop offset="95%" stopColor={color} stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid 
          strokeDasharray="3 3" 
          stroke="var(--espai-neutral-200)"
          vertical={false}
        />
        <XAxis 
          dataKey="date" 
          tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
          axisLine={{ stroke: 'var(--espai-neutral-300)' }}
          tickLine={false}
        />
        <YAxis 
          tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
          axisLine={{ stroke: 'var(--espai-neutral-300)' }}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend 
          wrapperStyle={{ paddingTop: '20px' }}
          iconType="circle"
        />
        <Area 
          type="monotone" 
          dataKey={dataKey} 
          name={dataLabel}
          stroke={color} 
          strokeWidth={2}
          fillOpacity={1} 
          fill="url(#colorGradient)" 
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

interface CategoryData {
  name: string;
  value: number;
  comparison?: number;
}

export interface EspaiBarChartProps {
  data: CategoryData[];
  dataKey: string;
  dataLabel: string;
  color?: string;
}

export function EspaiBarChart({ 
  data, 
  dataKey, 
  dataLabel,
  color = 'var(--espai-focus-600)'
}: EspaiBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid 
          strokeDasharray="3 3" 
          stroke="var(--espai-neutral-200)"
          vertical={false}
        />
        <XAxis 
          dataKey="name" 
          tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
          axisLine={{ stroke: 'var(--espai-neutral-300)' }}
          tickLine={false}
        />
        <YAxis 
          tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
          axisLine={{ stroke: 'var(--espai-neutral-300)' }}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend 
          wrapperStyle={{ paddingTop: '20px' }}
          iconType="circle"
        />
        <Bar 
          dataKey={dataKey}
          name={dataLabel}
          fill={color}
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
