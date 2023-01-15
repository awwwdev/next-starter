// unocss.config.ts
import { defineConfig, Preset, presetIcons, presetUno, presetWebFonts } from 'unocss';
import type { Theme } from 'unocss/preset-uno';
import presetTheme from 'unocss-preset-theme';
import transformerVariantGroup  from '@unocss/transformer-variant-group';
import { rules, shortcuts } from './uno-rules';
// import { presetForms } from '@julr/unocss-preset-forms'
import { darkTheme , lightTheme } from './uno-radix-colors';
export default defineConfig({
  rules,
  shortcuts,
  transformers: [transformerVariantGroup()],
  theme: lightTheme,
  presets: [
    presetUno({
      dark: "class"
    }),
    presetIcons({
      scale: 1.2,
    }),
    presetTheme<{}>({
      selectors: {
        dark: '.dark',
        light: '.light',
      },
      prefix: '--rdx',
      theme: {   dark: darkTheme   },
    }),
  ],
});



