import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy:    '#001F54',
        blue:    '#1E73FF',
        cyan:    '#3CC7F4',
        ink:     '#0F172A',
        muted:   '#64748B',
        surface: '#F8FAFC',
        border:  '#E2E8F0',
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
        body:    ['Inter', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        content: '768px',
        site:    '1280px',
      },
    },
  },
  plugins: [],
} satisfies Config;
