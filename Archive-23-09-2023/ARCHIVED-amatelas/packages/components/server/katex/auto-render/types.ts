import { ReactElement } from 'react'

export interface KatexDelimiter {
  left: string
  right: string
  display: boolean
}

export interface KatexMacros {
  [key: string]: string
}

export interface KatexSplitted {
  type: 'math' | 'text'
  data: string
  rawData?: string
  display?: boolean
}

export interface KatexConfig {
  delimiters?: KatexDelimiter[]
  macros?: KatexMacros
}

export type KatexChild = ReactElement | string | null
export type KatexChildren = KatexChild | KatexChild[]
