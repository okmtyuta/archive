import styles from './code.module.scss'
import { Lexer } from './function/lexer'

const t = String.raw`export const highlightToken = ("token": Token) => {
  if (token.type === 'space') {
    return <span>&nbsp;</span>
  }
  return (
    <span>
      <span key={crypto.randomUUID()} >
        {token.content}
      </span>
    </span>
  )

  slice() {
    while (this.text.length > 0) {
      this.stringSlice()
      this.commentSlice()
      this.regExpSlice()
      this.breakSlice()
      this.tabSlice()
      this.spaceSlice()
      this.numericSlice()
      this.keywordSlice()
      this.identifierSlice()
      this.otherSlice()
    }

    return this.tokens
  }
}`

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

export const Code = () => {
  const lexer = new Lexer(t)
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
