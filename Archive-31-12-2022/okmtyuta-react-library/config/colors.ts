import pallets, { graphPallets } from "./pallets";

export const colors = {
  charColor: pallets.textGradation[7],
  lightCharColor: pallets.textGradation[2],
  whiteCharColor: pallets.colorGradation[0],
  annotationCharColor: pallets.textGradation[0],
  activeAnnotationCharColor: pallets.textGradation[2],
  warningCharColor: pallets.colorPallets.red,
  buttonBlue: pallets.colorPallets.deepBlue,
  selectedMenuBackgroundBlue: pallets.colorPallets.lightBlue,
  selectedMenuCharBlue: pallets.colorPallets.deepBlue,
  backgroundGray: pallets.colorGradation[2],

  graphPurple: graphPallets.purple,
  graphDeepPurple: graphPallets.deepPurple,
  graphRed: graphPallets.red,
  graphBlue: graphPallets.blue,
  graphGreen: graphPallets.green,
  graphGray: graphPallets.gray,
};

export default colors;
