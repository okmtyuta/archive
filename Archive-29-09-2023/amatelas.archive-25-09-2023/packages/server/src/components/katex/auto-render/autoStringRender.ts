import katex from 'katex'
import { splitAtDelimiters } from './splitAtDelimiter'
import { createElement } from 'react'
import { KatexDelimiter, KatexMacros } from './types'
import { defaultDelimiters, defaultMacros } from './katexDefault'

export const autoStringRender = (
  text: string,
  delimiters: KatexDelimiter[] = defaultDelimiters,
  macros: KatexMacros = defaultMacros
) => {
  const elms: JSX.Element[] = []
  const splitted = splitAtDelimiters(text, delimiters)

  splitted.forEach((each) => {
    if (each.type === 'text') {
      const elm = createElement('span', { key: crypto.randomUUID() }, each.data)
      // const elm = <span key={crypto.randomUUID()}>{each.data}</span>
      elms.push(elm)
    } else if (each.type === 'math') {
      const html = katex.renderToString(each.data, {
        displayMode: each.display,
        macros: macros
      })
      const elm = createElement('span', {
        key: crypto.randomUUID(),
        dangerouslySetInnerHTML: { __html: html }
      })
      // const elm = <span key={crypto.randomUUID()} dangerouslySetInnerHTML={{ __html: html }} />
      elms.push(elm)
    }
  })

  return elms
}
