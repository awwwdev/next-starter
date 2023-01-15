import * as colors from '@radix-ui/colors';

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


export const lightTheme = {
  colors: {
    ...lightColorsConfig,
    prm: {
      ...colorScaleObj("orange")
    }
  },
}
export const darkTheme = {
  colors: {
    ...darkColorsConfig,
    prm: {
      ...colorScaleObj("orange")
    }
  },
}