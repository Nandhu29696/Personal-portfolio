/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Single accent colour, a nod to the Canadian flag red.
        maple: {
          50: '#fef3f2',
          100: '#fde4e2',
          400: '#f16a5f',
          500: '#e2382b',
          600: '#c8231a',
          700: '#a51c14',
        },
      },
      fontFamily: {
        sans: ['"Outfit Variable"', 'Outfit', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        page: '72rem',
      },
    },
  },
  plugins: [],
};
