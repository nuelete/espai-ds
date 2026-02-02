/**
 * Espai Design Tokens
 * 
 * These tokens can be used programmatically in your application.
 * For CSS usage, import the styles.css file.
 */

// Neutral Foundation
export const neutralColors = {
  50: '#F8F9FA',
  100: '#F1F3F5',
  200: '#E9ECEF',
  300: '#DEE2E6',
  400: '#CED4DA',
  500: '#ADB5BD',
  600: '#868E96',
  700: '#495057',
  800: '#343A40',
  900: '#212529',
} as const;

// Focus Blue - Primary Accent
export const focusColors = {
  300: '#A5D8FF',
  400: '#74C0FC',
  500: '#4DABF7',
  600: '#339AF0',
  700: '#1C7ED6',
} as const;

// Calm Teal - Supportive Secondary
export const supportColors = {
  300: '#96F2D7',
  400: '#63E6BE',
  500: '#38D9A9',
  600: '#20C997',
  700: '#12B886',
} as const;

// Soft Signal - Attention Without Alarm
export const signalColors = {
  300: '#FFD43B',
  400: '#FCC419',
  500: '#FAB005',
  600: '#F59F00',
  700: '#E67700',
} as const;

// Measured Red - Critical (Rare Use)
export const criticalColors = {
  300: '#FFA8A8',
  400: '#FF8787',
  500: '#FF6B6B',
  600: '#FA5252',
  700: '#F03E3E',
} as const;

// Semantic Tokens
export const semanticTokens = {
  background: {
    default: '#FFFFFF',
    surface: '#FFFFFF',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
  text: {
    primary: '#212529',
    secondary: '#495057',
    muted: '#868E96',
  },
  border: {
    subtle: '#E9ECEF',
    moderate: '#DEE2E6',
  },
} as const;

// Typography Scale
export const typography = {
  fontFamily: {
    body: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    display: 'Fraunces, Georgia, serif',
    mono: 'JetBrains Mono, Consolas, Monaco, "Courier New", monospace',
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    md: '1rem',       // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '2rem',    // 32px
    '4xl': '3rem',    // 48px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.6,
  },
} as const;

// Spacing Scale
export const spacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
} as const;

// Border Radius
export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  full: '9999px',
} as const;

// Export all tokens as a single object
export const tokens = {
  colors: {
    neutral: neutralColors,
    focus: focusColors,
    support: supportColors,
    signal: signalColors,
    critical: criticalColors,
    semantic: semanticTokens,
  },
  typography,
  spacing,
  borderRadius,
} as const;
