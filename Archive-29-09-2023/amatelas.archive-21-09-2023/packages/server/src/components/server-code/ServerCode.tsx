import { AmatelasBaseProps } from '../types'
import styles from './server-code.module.scss'
import { Lexer } from './function/lexer'

interface ServerCodeProps extends AmatelasBaseProps {
  children: string
}

export type TokenType =
  | 'reserved'
  | 'string'
  | 'type'
  | 'keyword'
  | 'number'
  | 'operator'
  | 'punctuation'
  | 'bracket'
  | 'normal'
  | 'function'
  | 'space'
  | 'break'
  | 'tab'
  | 'comment'
  | 'regexp'
  | 'property'

export interface Token {
  type: TokenType
  content: string
}

const highlightToken = (token: Token) => {
  if (token.type === 'space') {
    return (
      <span>
        <span className={styles['space']}>&nbsp;</span>
        {/* <span className={styles['space']}>&nbsp;</span> */}
      </span>
    )
  }
  if (token.type === 'tab') {
    return (
      <span>
        <span className={styles['space']}>&nbsp;</span>
        <span className={styles['space']}>&nbsp;</span>
        {/* <span className={styles['space']}>&nbsp;</span>
        <span className={styles['space']}>&nbsp;</span> */}
      </span>
    )
  }
  if (token.type === 'break') {
    return <br />
  }
  return (
    <span>
      <span key={crypto.randomUUID()} className={`${styles[token.type]} ${styles['token']}`}>
        {token.content}
      </span>
    </span>
  )
}

const highlightLine = (tokens: Token[]) => {
  const elms: JSX.Element[] = []
  for (const token of tokens) {
    elms.push(<span key={crypto.randomUUID()}>{highlightToken(token)}</span>)
  }
  return elms
}

export const ServerCode = (props: ServerCodeProps) => {
  const lexer = new Lexer(props.children)
  const tokens = lexer.slice()
  const elms = highlightLine(tokens)
  return (
    <div className={styles['code']}>
      <pre>
        <code className="language-js">
          <div>{elms}</div>
        </code>
      </pre>
    </div>
  )
}
