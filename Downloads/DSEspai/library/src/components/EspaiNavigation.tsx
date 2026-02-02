import { Home, TrendingDown, Users, FileText, Settings, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: string;
  badgeType?: 'signal' | 'critical';
}

export function EspaiNavigation() {
  const [activeItem, setActiveItem] = useState('overview');

  const navItems: NavItem[] = [
    { id: 'overview', label: 'Overview', icon: <Home className="w-5 h-5" /> },
    { id: 'risks', label: 'Revenue at Risk', icon: <TrendingDown className="w-5 h-5" />, badge: '3', badgeType: 'signal' },
    { id: 'accounts', label: 'Accounts', icon: <Users className="w-5 h-5" /> },
    { id: 'insights', label: 'Insights', icon: <FileText className="w-5 h-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <nav className="w-64 bg-[var(--bg-surface)] border-r border-[var(--border-subtle)] h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-[var(--border-subtle)]">
        <h3 className="text-[var(--text-primary)]">Espai</h3>
        <p className="text-xs text-[var(--text-muted)] mt-1">Revenue Risk Intelligence</p>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = activeItem === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`
                w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg
                transition-all duration-200
                ${isActive 
                  ? 'bg-[var(--espai-focus-300)] bg-opacity-30 text-[var(--espai-focus-600)]' 
                  : 'text-[var(--text-secondary)] hover:bg-[var(--espai-neutral-100)] hover:text-[var(--text-primary)]'
                }
              `}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              {item.badge && (
                <span 
                  className={`
                    text-xs font-medium px-2 py-0.5 rounded-full
                    ${item.badgeType === 'critical' 
                      ? 'bg-[var(--espai-critical-300)] text-[var(--espai-critical-600)]'
                      : 'bg-[var(--espai-signal-300)] text-[var(--espai-signal-600)]'
                    }
                  `}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* User section */}
      <div className="p-4 border-t border-[var(--border-subtle)]">
        <button className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg hover:bg-[var(--espai-neutral-100)] transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[var(--espai-focus-300)] flex items-center justify-center text-sm font-medium text-[var(--espai-focus-600)]">
              JD
            </div>
            <div className="text-left">
              <div className="text-sm font-medium text-[var(--text-primary)]">Jane Doe</div>
              <div className="text-xs text-[var(--text-muted)]">Admin</div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-[var(--text-muted)]" />
        </button>
      </div>
    </nav>
  );
}
