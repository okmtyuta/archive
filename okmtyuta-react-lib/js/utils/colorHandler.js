export const hexToRgb = (hex) => {
  const red_hex = hex.slice(1, 3);
  const green_hex = hex.slice(3, 5);
  const blue_hex = hex.slice(5, 7);

  const red_dec = parseInt(red_hex, 16);
  const green_dec = parseInt(green_hex, 16);
  const blue_dec = parseInt(blue_hex, 16);

  return [red_dec, green_dec, blue_dec]
}

export const rgbToHex = (rgb) => {
  const red_hex = rgb[0].toString(16);
  const green_hex = rgb[1].toString(16);
  const blue_hex = rgb[2].toString(16);

  return `#${red_hex}${green_hex}${blue_hex}`
}

export const lighten = (colorCode, param = 1.2) => {
  const rgb = hexToRgb(colorCode);
  const rgb_lighten = [Math.floor(Number(rgb[0]) * param), Math.floor(Number(rgb[1]) * param), Math.floor(Number(rgb[2]) * param)]
  let rgb_lighten_flatten = []
  
  for (const color_lighten of rgb_lighten) {
    if (color_lighten >= 255) {
      rgb_lighten_flatten.push(255)
    } else {
      rgb_lighten_flatten.push(color_lighten)
    }
  }
  
  return rgbToHex(rgb_lighten_flatten)
}

export const darken = (colorCode, param = 14) => {
  const rgb = hexToRgb(colorCode);
  const rgb_lighten = [Math.floor(Number(rgb[0]) - param), Math.floor(Number(rgb[1]) - param), Math.floor(Number(rgb[2]) - param)]
  let rgb_lighten_flatten = []
  
  for (const color_lighten of rgb_lighten) {
    if (color_lighten <= 0) {
      rgb_lighten_flatten.push(1)
    } else {
      rgb_lighten_flatten.push(color_lighten)
    }
  }
  
  return rgbToHex(rgb_lighten_flatten)
}

export const colorHandler = {
  hexToRgb, rgbToHex, lighten, darken, 
}