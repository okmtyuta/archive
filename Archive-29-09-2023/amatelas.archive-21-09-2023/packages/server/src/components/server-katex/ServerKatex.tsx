import 'katex/dist/katex.css'
import './server-katex.scss'
import { autoStringRender } from './auto-render/autoStringRender'
import { KatexConfig } from './auto-render/types'

interface ServerKatexProps {
  children: string
  config?: KatexConfig
}

export const ServerKatex = (props: ServerKatexProps) => {
  const elms = autoStringRender(props.children, props.config?.delimiters, props.config?.macros)
  return <span>{elms}</span>
}
