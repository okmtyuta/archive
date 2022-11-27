import { css } from 'styled-components'
import { fontSizes, fontSizeTypes } from './fonts';

// break points
const pcMin   = 1025;
const tabMin  = 600;
const tabMax  = 1024;
const spMax   = 599;

const pc = (first, ...args) => css`
  @media screen and (min-width: ${pcMin}px) {
    ${css(first, ...args)}
  }
`
const tab = (first, ...args) => css`
  @media screen and (min-width: ${tabMin}px) and (max-width: ${tabMax}px) {
    ${css(first, ...args)}
  }
`
const sp = (first, ...args) => css`
  @media (max-width: ${spMax}px) {
    ${css(first, ...args)}
  }
`

export const fontSizing = (fontSizeType) => {
  // Check whether fontSizeTypes is in fontSizes.
  try {
    if (fontSizeType in fontSizes === false) {
      throw new ReferenceError(`You select "${fontSizeType}" fontSizeType, but fontSizeType property is supposed to be selected from ${fontSizeTypes}.`)
    } 
  } catch(error) {
      console.error(error)
  }

  return css`
    @media screen and (min-width: ${pcMin}px) {
      font-size: ${fontSizes[fontSizeType].pc}px;
    }
    @media screen and (min-width: ${tabMin}px) and (max-width: ${tabMax}px) {
      font-size: ${fontSizes[fontSizeType].tab}px;
    }
    @media (max-width: ${spMax}px) {
      font-size: ${fontSizes[fontSizeType].sp}px;
    }
  `}

export const deleteOn = (...media) => {
  let css = []
  for (const medium of media) {
    if (medium === "pc") {
      css.push(
        pc`
          display: none;
        `
      )
    } else if (medium === "tab") {
      css.push(
        tab`
          display: none;
        `
      )
    } else if (medium === "sp") {
      css.push(
        sp`
          display: none;
        `
      )
    }
  } 

  return css;
}

export const mq = {
  pc, tab, sp
}