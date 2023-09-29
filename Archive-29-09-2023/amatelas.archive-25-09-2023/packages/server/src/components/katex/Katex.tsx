import 'katex/dist/katex.css'
import './katex.scss'
import { autoStringRender } from './auto-render/autoStringRender'
import { KatexConfig } from './auto-render/types'

interface KatexProps {
  children: string
  config?: KatexConfig
}

export const Katex = (props: KatexProps) => {
  const elms = autoStringRender(
    props.children,
    props.config?.delimiters,
    props.config?.macros
  )
  return <span>{elms}</span>
}
