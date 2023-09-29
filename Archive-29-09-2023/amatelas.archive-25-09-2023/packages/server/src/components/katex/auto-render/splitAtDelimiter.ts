import { escapeRegex } from './escapeRegex'
import { findEndOfMath } from './findEndOfMath'
import { KatexDelimiter, KatexSplitted } from './types'

const amsRegex = /^\\begin{/

export const splitAtDelimiters = (
  text: string,
  delimiters: KatexDelimiter[]
): KatexSplitted[] => {
  let index
  const data: KatexSplitted[] = []

  const regexLeft = new RegExp(
    '(' + delimiters.map((x) => escapeRegex(x.left)).join('|') + ')'
  )

  // eslint-disable-next-line no-constant-condition
  while (true) {
    index = text.search(regexLeft)
    if (index === -1) {
      break
    }
    if (index > 0) {
      data.push({
        type: 'text',
        data: text.slice(0, index)
      })
      text = text.slice(index) // now text starts with delimiter
    }
    // ... so this always succeeds:
    const i = delimiters.findIndex((delim) => text.startsWith(delim.left))
    index = findEndOfMath(delimiters[i].right, text, delimiters[i].left.length)
    if (index === -1) {
      break
    }
    const rawData = text.slice(0, index + delimiters[i].right.length)
    const math = amsRegex.test(rawData)
      ? rawData
      : text.slice(delimiters[i].left.length, index)
    data.push({
      type: 'math',
      data: math,
      rawData,
      display: delimiters[i].display
    })
    text = text.slice(index + delimiters[i].right.length)
  }

  if (text !== '') {
    data.push({
      type: 'text',
      data: text
    })
  }

  return data
}
