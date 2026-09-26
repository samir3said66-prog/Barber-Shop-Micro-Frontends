/**
 * Egyptian Barber Shop Brand Colors
 *
 * Visual direction: Modern Egyptian craft + premium barber shop
 * - Primary: Deep, sophisticated brown (classic barber aesthetic)
 * - Surface: Slightly lighter for depth
 * - Accent: Warm terracotta (Egyptian/Mediterranean feel)
 * - Sand: Warm beige (Egyptian desert aesthetic)
 * - Background: Off-white (clean, modern)
 * - Text: Dark brown (high contrast)
 * - Muted: Warm gray (secondary text)
 */

export const colors = {
  // Primary Brand Colors
  primary: {
    50: '#F5F2F0',
    100: '#E8E3DE',
    200: '#D9CFC5',
    300: '#C8B8AA',
    400: '#B8A094',
    500: '#A68878',
    600: '#8F6F5A',
    700: '#765643',
    800: '#5A3E2F',
    900: '#3D2620',
    950: '#2A1918',
  },
  darkBrown: '#171412', // Primary dark (logo, headings)
  brown: '#211E1B', // Primary text
  surface: '#29231F', // Surface elevation
  accent: '#B66A3C', // Warm terracotta accent
  accentHover: '#C97F4F', // Accent hover state
  sand: '#E7D8C5', // Warm beige
  background: '#F8F5F0', // Off-white background
  backgroundDark: '#1A1614', // Dark page background
  surfaceRaised: '#FFFFFF', // Raised light surface
  surfaceDark: '#2A2522', // Raised dark surface
  text: '#211E1B', // Primary text
  muted: '#6F6861', // Secondary text, disabled
  border: '#D9CFC5', // Default border
  borderSubtle: '#E7D8C5', // Low-contrast border

  // Status Colors
  success: '#10B981', // Green
  successSurface: '#F0FDF4',
  successBorder: '#BBF7D0',
  error: '#EF4444', // Red
  danger: '#DC2626', // Strong application error state
  dangerStrong: '#991B1B',
  warning: '#F59E0B', // Amber
  info: '#3B82F6', // Blue

  // Neutral
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },

  // Semantic
  transparent: 'transparent',
};

/**
 * CSS Variables for Design Tokens
 * Usage: var(--color-primary-dark)
 */
export const colorVariables = {
  '--color-primary-dark': colors.darkBrown,
  '--color-primary': colors.brown,
  '--color-surface': colors.surface,
  '--color-accent': colors.accent,
  '--color-accent-hover': colors.accentHover,
  '--color-sand': colors.sand,
  '--color-background': colors.background,
  '--color-background-dark': colors.backgroundDark,
  '--color-surface-raised': colors.surfaceRaised,
  '--color-surface-dark': colors.surfaceDark,
  '--color-text': colors.text,
  '--color-muted': colors.muted,
  '--color-border': colors.border,
  '--color-border-subtle': colors.borderSubtle,
  '--color-success': colors.success,
  '--color-success-surface': colors.successSurface,
  '--color-success-border': colors.successBorder,
  '--color-error': colors.error,
  '--color-danger': colors.danger,
  '--color-danger-strong': colors.dangerStrong,
  '--color-warning': colors.warning,
  '--color-info': colors.info,
  '--color-white': colors.white,
  '--color-black': colors.black,
} as const;
