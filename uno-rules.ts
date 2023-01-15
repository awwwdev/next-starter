import type { Rule , Shortcut } from 'unocss';
export const rules: Rule[] =  [
  ['ls-tightest', { 'letter-spacing': '-0.025em' }],
  ['ls-tighter', { 'letter-spacing': '-0.0125em' }],
  ['ls-tight', { 'letter-spacing': '-0.00625em' }],
  ['ls-normal', { 'letter-spacing': '0' }],
  ['ls-wide', { 'letter-spacing': '0.00625em' }],
  ['ls-wider', { 'letter-spacing': '0.0125em' }],
  ['ls-widest', { 'letter-spacing': '0.025em' }],
  ['rel', { 'position': 'relative' }],
  ['abs', { 'position': 'absolute' }],
  ['text-2xs', { 'font-size': '0.6rem' , "line-height" : "0.9rem" }],
  [ /^content-(.*)$/, ([, cnt]) => ({ content: `"${cnt}"` }) ],
  [
    /^grid-min-col-(.*)$/,
    ([, minColWidth]) => ({ 'grid-template-columns': `repeat(auto-fill, minmax(min(${minColWidth}, 100%), 1fr))` }),
  ],
];

export const shortcuts: Shortcut[] = [ 
  {
    "iso-rel": "relative isolate",
    field: 'px-2 py-1 rd b-0 bg-gray3',
    chip: 'no-underline rd-xl px-4 py-2 bg-gray3 c-gray11 hover:(bg-gray4)',
    "chip-link": 'chip data-[in-path]:(bg-orange4 c-orange11)',
    jc: 'justify-center',
    jb: 'justify-between',
    ic: 'items-center',
    ac: 'items-center',
    'tab-link': 'b rd-lg text-center  px-4 py-2 hover:(b-orange7 c-orange11) data-[in-path]:(b-orange7 c-orange11)',
    'tab-radix': 'b b-orange6 c-orange11 rd-2xl hover:(b-orange7 c-orange12)  data-[state=active]:(bg-orange3)',
    'btn-disabled': '!c-gray9 !bg-gray5 !b-gray5',
    "btn-prm": 'flex jc ac gap-1 b-1 uppercase  fw-500 px-4 py-1 rd-lg b-orange10 bg-orange10 c-white  hover:(bg-orange9 b-orange9) focus:(bg-orange9 b-orange9) active:(bg-orange11 b-orange9) disabled:(btn-disabled)',
    btn: 'flex jc ac gap-1 b-1 uppercase  fw-500 px-4 py-1 rd-lg b-gray10 bg-gray10 c-white  hover:(bg-gray9 b-gray9) focus:(bg-gray9 b-gray9) active:(bg-gray11 b-gray9) disabled:(btn-disabled)',
    'btn-ghost-prm':
      'flex ac jc gap-1 b-1 uppercase  fw-500 px-4 py-1 rd-lg b-gray9 c-gray11 active:(b-gray11 bg-gray1) hover:(b-gray9  bg-gray1)  focus:(b-gray9  bg-gray1) disabled:(btn-disabled)',
    'btn-ghost':
      'flex ac jc gap-1 b-1 uppercase  fw-500 px-4 py-1 rd-lg b-gray9 c-gray11 active:(b-gray11 bg-gray1) hover:(b-gray9  bg-gray1)  focus:(b-gray9  bg-gray1) disabled:(btn-disabled)',
    'btn-link-prm':
      'flex ac jc gap-1 b-1 b-transparent uppercase  fw-500 px-4 py-1 rd-lg  c-orange11 active:(b-orange3 bg-orange3) hover:(b-orange2  bg-orange2) focus:(b-orange2 bg-orange2) disabled:(btn-disabled)',
    'btn-link':
      'flex ac jc gap-1 b-1 b-transparent uppercase  fw-500 px-4 py-1 rd-lg  c-gray11 active:(b-gray3 bg-gray3) hover:(b-gray2  bg-gray2) focus:(b-gray2 bg-gray2) disabled:(btn-disabled)',
    'snack-info':
      'b b-blue7 bg-blue3 rd-lg p-4 c-blue11 flex  before:(inline-block content-none flex-shrink-0 i-ph-info vertical-text-top mie-[0.5em])',
    'snack-warning':
      'b b-yellow7 bg-yellow3  c-yellow11 rd-lg p-4 flex before:(inline-block content-none flex-shrink-0 i-ph-warning vertical-text-top mie-[0.5em])',
    'snack-success':
      'b b-green7 bg-green3 c-green11 rd-lg p-4 flex  before:(inline-block content-none flex-shrink-0 i-ph-check-circle vertical-text-top mie-[0.5em])',
    'snack-error':
      'b b-red7 bg-red3 c-red11 rd-lg p-4 flex before:(inline-block content-none flex-shrink-0 i-ph-x-circle vertical-text-top mie-[0.5em])',
    'snack-danger':
      'b b-red7 bg-red3  c-red11 rd-lg p-4 flex  before:(inline-block content-none flex-shrink-0 i-ph-warning-octagon vertical-text-top mie-[0.5em])',
      "info-line": "bf-i-ph-info flex ac gap-1 text-sm c-blue10 ",
      "success-line": "bf-i-ph-check-circle flex ac gap-1 text-sm c-green10",
      "warning-line": "bf-i-ph-warning flex ac gap-1 text-sm c-yellow10",
      "error-line": "bf-i-ph-x-circle flex ac gap-1 text-sm c-red10",
      "danger-line": "bf-i-ph-warning-octagon flex ac gap-1 text-sm c-red10",
    snack: 'b b-gray7 bg-gray3 c-gray11 rd-lg p-4',
    H1: 'text-4xl fw-900 ls-tightest c-gray10',
    H2: 'text-3xl fw-900 ls-tight c-gray12',
    H3: 'text-xl fw-900 ls-wide c-gray12 ',
    H4: 'fw-900 ls-widest c-gray12',
    text: 'fw-400 text-base',
    'text-note': 'c-gray11 text-sm',
    'text-tiny-note': 'c-gray11 text-xs',
    'card-ghost': 'rd-xl p-4 b b-gray6',
    'card-solid': 'rd-xl p-4 b b-transparent bg-gray9 ',
    "table-header-cell": "b-gray5 px-2 py-1 pt-2 first-of-type:(pis-4 rd-tl-xl)  last-of-type:(pie-4  last-of-type:rd-tr-xl)  b-e-1 b-b-1",
    "table-body-cell": "px-2 py-1 first-of-type:pis-4  last-of-type:pie-4 b-e-1 b-b-1 b-gray5",
    "table-footer-cell": "b-gray5 px-2 py-1 pb-3 first-of-type:(pis-4 rd-bl-xl)  last-of-type:(pie-4  last-of-type:rd-br-xl) b-e-1 ",
  },
  [/^bf-i-(.*)$/, ([, iconName]) => `before:content-none before:inline-block before:i-${iconName}`],
  [/^af-i-(.*)$/, ([, iconName]) => `after:content-none before:inline-block after:i-${iconName}`],
  [/^ol-(.*)$/, ([, val]) => `outline-${val}`],
];