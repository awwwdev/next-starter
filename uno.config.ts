// unocss.config.ts
import { defineConfig, Preset, presetIcons, presetUno, presetWebFonts } from 'unocss';
import * as colors from '@radix-ui/colors';
import type { Theme } from 'unocss/preset-uno';
import presetTheme from 'unocss-preset-theme';
import transformerVariantGroup  from '@unocss/transformer-variant-group';
// import { presetForms } from '@julr/unocss-preset-forms'

const colorScale = (colorName) => colorName.replace("Dark", "");

const colorScaleObj = (colorName) => {
  const res = {};
  const color = colors[colorName];
  for (let i = 1; i < 13; i++) {
    const colorScaleName = colorScale(colorName);
    res[i] = color[`${colorScaleName}${i}`];
  }
  return res;
};

const lightColorNames = Object.keys(colors).filter((cn) => !cn.includes("Dark"));
const darkColorNames = Object.keys(colors).filter((cn) => cn.includes("Dark"));

const colorConfig = (listOfColorNames) => {
  const res = {};

  listOfColorNames.forEach((colorName) => {
    const colorScaleName = colorScale(colorName);
    res[colorScaleName] = colorScaleObj(colorName);
  });
  return res;
};

const lightColorsConfig = colorConfig(lightColorNames);
const darkColorsConfig = colorConfig(darkColorNames);

export default defineConfig({
  rules: [
   [ "ls-tightest", {"letter-spacing": "-0.025em"} ],
   [ "ls-tighter", {"letter-spacing": "-0.0125em"} ],
   [ "ls-tight", {"letter-spacing": "-0.00625em"} ],
   [ "ls-normal", {"letter-spacing": "0"} ],
   [ "ls-wide", {"letter-spacing": "0.00625em"} ],
   [ "ls-wider", {"letter-spacing": "0.0125em"} ],
   [ "ls-widest", {"letter-spacing": "0.025em"} ],
   [/^grid-min-col-(.*)$/, ([, minColWidth]) => ({"grid-template-columns": `repeat(auto-fill, minmax(min(${minColWidth}, 100%), 1fr))`}) ],
  ],
  shortcuts: [
    {
       field: 'px-2 py-1 rd b-0 bg-gray3',
      chip: 'no-underline rd-xl px-4 py-2 bg-gray3 c-gray11 hover:(bg-gray4 c-gray12)',
      "chip-link": 'chip data-[in-path]:(bg-orange4 c-orange11)',
      jc: "justify-center",
      jb: "justify-between",
      ic:"items-center",
      ac:"items-center",
      "btn-disabled": "!c-gray9 !bg-gray5 !b-gray5",
      btn: 'flex jc ac gap-1 b-2 uppercase  fw-500 px-4 py-1 rd-lg b-blue10 bg-blue10 c-white  hover:(bg-blue9 b-blue9) focus:(bg-blue9 b-blue9) active:(bg-blue11 b-blue9) disabled:(btn-disabled)',
      "btn-ghost": 'flex ac jc gap-1 b-2 uppercase  fw-500 px-4 py-1 rd-lg b-blue9 c-blue11 active:(b-blue11 bg-blue1) hover:(b-blue9  bg-blue1)  focus:(b-blue9  bg-blue1) disabled:(btn-disabled)',
      "btn-link": 'flex ac jc gap-1 b-2 b-transparent uppercase  fw-500 px-4 py-1 rd-lg  c-blue11 active:(b-blue3 bg-blue3) hover:(b-blue2  bg-blue2) focus:(b-blue2 bg-blue2) disabled:(btn-disabled)',
      "snack-info": "b-1 b-blue7 bg-blue3 rd-lg p-4 c-blue11   before:(inline-block content-none w-[1em] i-ph-info vertical-text-top mie-[0.5em])",
      "snack-warning": "b-1 b-yellow7 bg-yellow3  c-yellow11 rd-lg p-4  before:(inline-block content-none w-[1em] i-ph-warning vertical-text-top mie-[0.5em])",
      "snack-success": "b-1 b-green7 bg-green3 c-green11 rd-lg p-4   before:(inline-block content-none w-[1em] i-ph-check-circle vertical-text-top mie-[0.5em])",
      "snack-error": "b-1 b-red7 bg-red3 c-red11 rd-lg p-4  before:(inline-block content-none w-[1em] i-ph-x-circle vertical-text-top mie-[0.5em])",
      "snack-danger": "b-1 b-red7 bg-red3  c-red11 rd-lg p-4   before:(inline-block content-none w-[1em] i-ph-warning-octagon vertical-text-top mie-[0.5em])",
      "snack": "b-1 b-gray7 bg-gray3 c-gray11 rd-lg p-4",
      'H1': "text-4xl fw-900 ls-tightest text-gray10",
      'H2': "text-3xl fw-900 ls-tight text-gray12",
      'H3': "text-xl fw-900 ls-wide text-gray12 ",
      'H4': "fw-900 ls-widest text-gray12",
      'text': "fw-400 text-base",
      'text-note': "text-gray11 text-sm",
      'text-tiny-note': "text-gray11 text-xs",
      'card-ghost': "rd-xl p-4 b-1 b-gray6",
      'card-solid': "rd-xl p-4 b-1 b-transparent bg-gray9 ",
      "table-header-cell": "b-gray5 px-2 py-1 pt-2 first-of-type:(pis-4 rd-tl-xl)  last-of-type:(pie-4  last-of-type:rd-tr-xl)  b-e-1 b-b-1",
      "table-body-cell": "px-2 py-1 first-of-type:pis-4  last-of-type:pie-4 b-e-1 b-b-1 b-gray5",
      "table-footer-cell": "b-gray5 px-2 py-1 pb-3 first-of-type:(pis-4 rd-bl-xl)  last-of-type:(pie-4  last-of-type:rd-br-xl) b-e-1 ",
    },
    [/^bf-i-(.*)$/, ([, iconName]) => `before:content-none before:inline-block before:vertical-middle before:mie-[0.5em] before:i-${iconName}`],
    [/^af-i-(.*)$/, ([, iconName]) => `after:content-none after:inline-block after:vertical-middle after:mie-[0.5em] after:i-${iconName}`],
  ],
  transformers: [transformerVariantGroup()],
  theme: {
    colors: {
      ...lightColorsConfig,
      prm: {
        ...colorScaleObj("orange")
      }
    },
  },
  presets: [
    presetUno({
      dark: "class"
    }),
    presetIcons({
      scale: 1.2,
    }),
    // presetForms(),
    presetTheme<Theme>({
      selectors: {
        dark: '.dark',
        light: '.light',
      },
      prefix: '--rdx',
      theme: {
        dark: {
          colors: {
            ...darkColorsConfig,
            prm: {
              ...colorScaleObj("orange")
            }
          },
        },
      },
    })
  ],
});



