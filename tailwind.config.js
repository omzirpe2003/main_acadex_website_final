/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: 'var(--color-paper)',
          card: 'var(--color-paper-2)',
          subtle: 'var(--color-paper-3)',
          recessed: 'var(--color-paper-subtle)',
        },
        ink: {
          DEFAULT: 'var(--color-ink)',
          secondary: 'var(--color-ink-2)',
          muted: 'var(--color-ink-3)',
        },
        rule: {
          DEFAULT: 'var(--color-rule)',
          strong: 'var(--color-rule-strong)',
        },
        brand: {
          DEFAULT: 'var(--color-brand)',
          light: 'var(--color-brand-light)',
          subtle: 'var(--color-brand-subtle)',
          surface: 'var(--color-brand-surface)',
        },
        // Backward compatibility mapping
        forest: {
          DEFAULT: 'var(--color-brand)',
          light: 'var(--color-brand-light)',
          subtle: 'var(--color-brand-subtle)',
          surface: 'var(--color-brand-surface)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          subtle: 'var(--color-accent-subtle)',
          border: 'var(--color-accent-border)',
          ink: 'var(--color-accent-ink)',
        },
        focus: 'var(--color-focus)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        sans: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      lineHeight: {
        tight: 'var(--lh-tight)',
        snug: 'var(--lh-snug)',
        normal: 'var(--lh-normal)',
        relaxed: 'var(--lh-relaxed)',
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        hairline: 'var(--shadow-hairline)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        accent: 'var(--shadow-accent)',
      },
      transitionTimingFunction: {
        out: 'var(--ease-out)',
        'in-out': 'var(--ease-in-out)',
      },
    },
  },
  plugins: [],
}
