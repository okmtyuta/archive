import { KatexDelimiter, KatexMacros } from './types'

export const defaultDelimiters: KatexDelimiter[] = [
  { left: '$', right: '$', display: false },
  { left: '\\(', right: '\\)', display: false },
  { left: '\\[', right: '\\]', display: true },
  { left: '\\begin{equation*}', right: '\\end{equation*}', display: true }
]

export const defaultMacros: KatexMacros = {
  '\\R': '\\mathbb{R}'
}
