import { KatexChildren, KatexConfig } from './auto-render/types'
import 'katex/dist/katex.css'
import { autoRender } from './auto-render/autoRender'

interface ServerAutoKatexProps {
  children?: KatexChildren
  config?: KatexConfig
}

export const ServerAutoKatex = (props: ServerAutoKatexProps) => {
  const elm = autoRender(props.children, props.config?.delimiters, props.config?.macros)
  return <span>{elm}</span>
}
