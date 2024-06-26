import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: 'tw-',
  theme: {
    fontFamily: {
      proxima_novaregular: [
        'proxima_novaregular',
        ...defaultTheme.fontFamily.sans,
      ],
      proxima_novabold: ['proxima_novabold', ...defaultTheme.fontFamily.sans],
    },
    minHeight: {
      50: '12.5rem',
      100: '25rem',
      112.5: '28.125rem',
      125: '31.25rem',
      150: '37.5rem',
    },
    minWidth: {
      50: '12.5rem',
      100: '25rem',
      112.5: '28.125rem',
      125: '31.25rem',
      150: '37.5rem',
      full: '100%',
    },
    maxWidth: {
      25: '6.25rem',
      50: '12.5rem',
      100: '25rem',
      112.5: '28.125rem',
      125: '31.25rem',
      150: '37.5rem',
      full: '100%',
    },
    extend: {
      colors: {
        primary: '#c0933e',
        secondary: '#00a3ff',
        guyabano: '#f8f8f8',
        border: {
          1: '#dfe8f6',
          default: '#dfe8f6',
        },
        date: {
          1: '#8499b1',
          2: '#47698e',
          default: '#8499b1',
        },
      },
      backgroundImage: {
        'back-swerl': "url('/images/back-swerl.png')",
        'white-house': "url('/images/whitehouse.png')",
        rocket: "url('/images/rocket.png')",
        'relase-page': "url('/images/bg-dark-theme.png')",
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        '25%': '25%',
        '50%': '50%',
      },
      backgroundPosition: {
        'left-24': 'center left 6rem',
      },
      spacing: {
        1.5: '0.375rem',
        4.5: '1.125rem',
        100: '25rem',
        30: '7.5rem',
      },
      lineHeight: {
        6.5: '1.625rem',
      },
    },
  },
  plugins: [],
}
export default config
