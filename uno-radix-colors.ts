type RadixColors = typeof import("@radix-ui/colors");
type RadixColorName = keyof RadixColors;
import * as radixColors from "@radix-ui/colors";

const radixLightColors = Object.fromEntries(
  Object.entries(radixColors).filter(([key, value]) => !key.includes("Dark"))
);
const radixDarkColors = Object.fromEntries(Object.entries(radixColors).filter(([key, value]) => key.includes("Dark")));

const mapSingleColor = (colorName: RadixColorName) => {
  const color = radixColors[colorName];
  return Object.fromEntries(Object.entries(color).map(([key, value], index) => [index + 1, value]));
};

const lightColorsConfig = Object.fromEntries(
  Object.entries(radixLightColors).map(([key, value], index) => [key, mapSingleColor(key as RadixColorName)])
);
const darkColorsConfig = Object.fromEntries(
  Object.entries(radixDarkColors).map(([key, value], index) => [
    key.replace("Dark", ""),
    mapSingleColor(key as RadixColorName),
  ])
);

export const lightTheme = {
  colors: {
    ...lightColorsConfig,
    prm: { ...mapSingleColor("orange") },
  },
};
export const darkTheme = {
  colors: {
    ...darkColorsConfig,
    prm: { ...mapSingleColor("orangeDark") },
  },
};
