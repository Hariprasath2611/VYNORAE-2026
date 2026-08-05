/** @type {import('tailwindcss').Config} */
export default {
  // Scope ALL generated utilities under the carousel root.
  // This prevents Tailwind classes from leaking into the rest of the page.
  important: '#themes-carousel-root',
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        ring: 'hsl(var(--ring))',
      },
    },
  },
  plugins: [
    // Provides animate-in / fade-in utilities used by the caption
    require('tailwindcss-animate'),
  ],
}
