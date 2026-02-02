import { LucideIcon } from 'lucide-react';

interface EspaiButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'signal' | 'critical';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

export function EspaiButton({ 
  children, 
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  onClick,
  disabled = false,
  fullWidth = false
}: EspaiButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-md',
    lg: 'px-8 py-4 text-lg'
  };

  const variantStyles = {
    primary: {
      base: 'bg-[var(--espai-focus-600)] text-white border-transparent hover:bg-[var(--espai-focus-500)]',
      disabled: 'bg-[var(--espai-neutral-300)] text-[var(--espai-neutral-500)]'
    },
    secondary: {
      base: 'bg-transparent text-[var(--espai-focus-600)] border-[var(--espai-focus-600)] hover:bg-[var(--espai-focus-300)] hover:bg-opacity-30',
      disabled: 'bg-transparent text-[var(--espai-neutral-400)] border-[var(--espai-neutral-300)]'
    },
    ghost: {
      base: 'bg-transparent text-[var(--text-secondary)] border-transparent hover:bg-[var(--espai-neutral-100)] hover:text-[var(--text-primary)]',
      disabled: 'bg-transparent text-[var(--espai-neutral-400)] border-transparent'
    },
    signal: {
      base: 'bg-[var(--espai-signal-600)] text-white border-transparent hover:bg-[var(--espai-signal-500)]',
      disabled: 'bg-[var(--espai-neutral-300)] text-[var(--espai-neutral-500)]'
    },
    critical: {
      base: 'bg-[var(--espai-critical-600)] text-white border-transparent hover:bg-[var(--espai-critical-500)]',
      disabled: 'bg-[var(--espai-neutral-300)] text-[var(--espai-neutral-500)]'
    }
  };

  const classes = `
    ${sizeClasses[size]}
    ${disabled ? variantStyles[variant].disabled : variantStyles[variant].base}
    ${fullWidth ? 'w-full' : ''}
    flex items-center justify-center gap-2
    font-medium rounded-lg border
    transition-all duration-200
    ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
  `;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </button>
  );
}
