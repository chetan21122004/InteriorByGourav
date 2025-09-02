export const theme = {
  colors: {
    // Primary Colors
    navy: {
      DEFAULT: '#1A1E26',  // Dark Navy - Headers, navbar, footer
      light: '#2A2F3B',
      dark: '#12151A'
    },
    blue: {
      DEFAULT: '#94A7B8',  // Muted Blue - Subheadings, icons
      light: '#A5B5C4',
      dark: '#7A8B9C'
    },
    gold: {
      DEFAULT: '#B49C64',  // Gold - Buttons, hover effects
      light: '#C3AF82',
      dark: '#9A8450'
    },

    // Background Colors
    background: {
      primary: '#FFFFFF',  // White - Main background
      secondary: '#F8F9FA', // Light gray - Secondary background
      footer: '#1A1E26'    // Dark Navy - Footer background
    },

    // Text Colors
    text: {
      primary: '#1A1E26',  // Dark Navy - Primary text
      secondary: '#8A9BAA', // Gray - Secondary text
      light: '#FFFFFF'     // White - Light text (for dark backgrounds)
    }
  },

  // Gradients
  gradients: {
    hero: 'linear-gradient(135deg, #FFFFFF, #F8F9FA)',
    accent: 'linear-gradient(135deg, #B49C64, #9A8450)',
    footer: 'linear-gradient(135deg, #1A1E26, #2A2F3B)'
  },

  // Shadows
  shadows: {
    elegant: '0 4px 20px -4px rgba(26, 30, 38, 0.15)',
    soft: '0 2px 10px -2px rgba(26, 30, 38, 0.08)'
  },

  // Border Radius
  radius: {
    sm: '0.375rem',   // 6px
    DEFAULT: '0.5rem', // 8px
    md: '0.75rem',    // 12px
    lg: '1rem'        // 16px
  },

  // Transitions
  transitions: {
    smooth: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  }
} as const;
