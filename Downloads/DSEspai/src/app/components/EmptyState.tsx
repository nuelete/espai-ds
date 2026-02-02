import { LucideIcon } from 'lucide-react';
import { EspaiButton } from './EspaiButton';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
      <div 
        className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
        style={{ 
          backgroundColor: 'var(--espai-neutral-200)',
          color: 'var(--espai-neutral-500)'
        }}
      >
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="mb-2 text-[var(--text-primary)]">{title}</h3>
      <p className="text-[var(--text-secondary)] max-w-md mb-6">
        {description}
      </p>
      {action && (
        <EspaiButton onClick={action.onClick} variant="primary">
          {action.label}
        </EspaiButton>
      )}
    </div>
  );
}
