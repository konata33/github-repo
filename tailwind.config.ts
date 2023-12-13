import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';
import { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: { max: '320px' },
      sm: { max: '576px' },
      md: { max: '768px' },
      lg: { max: '992px' },
      xl: { max: '1200px' }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [nextui(), addShortcutPlugin]
};

function addShortcutPlugin({ addUtilities }: PluginAPI) {
  const styles = {
    '.content-auto': {
      'content-visibility': 'auto'
    },
    '.shadow-out-sm': {
      'box-shadow': '0 0 10px rgb(120 120 120 / 10%), 0 5px 20px rgb(120 120 120 / 20%)'
    },
    '.backface-hidden': {
      '-webkit-backface-visibility': 'hidden',
      '-moz-backface-visibility': 'hidden',
      '-webkit-transform': 'translate3d(0, 0, 0)',
      '-moz-transform': 'translate3d(0, 0, 0)'
    },
    '.center': {
      'align-items': 'center',
      'justify-content': 'center'
    },
    '.fill-content': {
      'min-height': `calc(100vh - 17.5rem)`
    }
  };
  addUtilities(styles);
}

export default config;
