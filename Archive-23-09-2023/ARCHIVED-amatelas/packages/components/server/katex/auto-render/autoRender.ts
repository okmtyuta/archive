import { ReactElement, cloneElement, createElement, isValidElement } from 'react'
import { KatexDelimiter, KatexMacros, KatexChildren } from './types'
import { autoStringRender } from './autoStringRender'
import { defaultDelimiters, defaultMacros } from './katexDefault'

const isReactElement = (arg: unknown): arg is ReactElement => {
  if (isValidElement(arg)) {
    return true
  }
  return false
}

const getChildren = (child?: ReactElement): KatexChildren | null => {
  const children = child?.props.children
  if (children) {
    return children
  } else {
    return null
  }
}

export const autoRender = (
  children?: KatexChildren,
  delimiters: KatexDelimiter[] = defaultDelimiters,
  macros: KatexMacros = defaultMacros
): JSX.Element => {
  if (typeof children === 'string') {
    const elms = autoStringRender(children, delimiters, macros)
    return createElement('span', { key: crypto.randomUUID() }, elms)
  } else if (isReactElement(children)) {
    const crn = getChildren(children)
    const elms = autoRender(crn)
    const elm = createElement('span', { key: crypto.randomUUID() }, elms)
    // const elm = <span key={crypto.randomUUID()}>{elms}</span>
    const cloned = cloneElement(children, { ...children.props, key: crypto.randomUUID() }, elm)
    return cloned
  } else if (children == undefined) {
    // const elm = <span key={crypto.randomUUID()} />
    const elm = createElement('span', { key: crypto.randomUUID() })
    return elm
  }

  const elms = []
  for (const child of children) {
    const elm = autoRender(child)
    elms.push(elm)
  }

  // return <span>{elms}</span>
  return createElement('span', {}, elms)
}
