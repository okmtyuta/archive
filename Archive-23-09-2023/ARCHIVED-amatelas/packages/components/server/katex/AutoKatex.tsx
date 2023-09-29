import { KatexChildren, KatexConfig } from './auto-render/types'
import 'katex/dist/katex.css'
import './katex.scss'
import { autoRender } from './auto-render/autoRender'

interface AutoKatexProps {
  children?: KatexChildren
  config?: KatexConfig
}

export const AutoKatex = (props: AutoKatexProps) => {
  const elm = autoRender(props.children, props.config?.delimiters, props.config?.macros)
  return <span>{elm}</span>
}
