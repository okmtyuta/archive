import { Token, TokenType } from '../ServerCode'

export class Lexer {
  text: string
  tokens: Token[]
  lastTokenType: TokenType
  lastTokenContent: string
  constructor(text: string) {
    this.text = text
    this.tokens = []
    this.lastTokenType = 'normal'
    this.lastTokenContent = ''
  }

  add(matched: RegExpMatchArray | null, type: TokenType) {
    if (!matched || matched.index == undefined) {
      return
    }
    const matchedString = matched[0]
    const start = matched.index
    const end = start + matchedString.length

    this.tokens.push({
      type: type,
      content: matchedString
    })

    this.lastTokenType = type
    this.lastTokenContent = matchedString
    this.text = this.text.slice(end)
  }

  stringSlice() {
    const regExp = /^(?:"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'|`(?:\\.|[^`\\])*`)/
    const matched = this.text.match(regExp)
    this.add(matched, 'string')
  }

  commentSlice() {
    const regExp = /^(?:\/\/.*|\/\*[^]*?\*\/)/
    const matched = this.text.match(regExp)
    this.add(matched, 'comment')
  }

  regExpSlice() {
    const regExp = /^\/(?:\\.|[^/\\\n])+\/[a-z]*/
    const matched = this.text.match(regExp)
    this.add(matched, 'regexp')
  }

  tabSlice() {
    const regExp = /^[\t]/
    const matched = this.text.match(regExp)
    this.add(matched, 'tab')
  }

  breakSlice() {
    const regExp = /^[\n]/
    const matched = this.text.match(regExp)
    this.add(matched, 'break')
  }

  spaceSlice() {
    const regExp = /^[ ]/
    const matched = this.text.match(regExp)
    this.add(matched, 'space')
  }

  numericSlice() {
    const regExp = /^(?:0x[0-9a-fA-F]+|(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?)/
    const matched = this.text.match(regExp)
    this.add(matched, 'number')
  }

  keywordSlice() {
    const regExp = /^(?:var|let|const|function|class|this)(?![0-9A-Za-z_$])/

    const matched = this.text.match(regExp)
    this.add(matched, 'keyword')
  }

  reservedSlice() {
    const regExp =
      /^(?:export|if|else|for|while|break|continue|switch|in|of|typeof|instanceof|return|new|true|false|null|async|await|extends|super|static|try|catch|finally|throw)(?![0-9A-Za-z_$])/

    const matched = this.text.match(regExp)
    this.add(matched, 'reserved')
  }

  identifierSlice() {
    const regExp = /^[A-Za-z_$][0-9A-Za-z_$]*/

    const matched = this.text.match(regExp)
    if (this.lastTokenContent === '.') {
      this.add(matched, 'property')
    } else {
      this.add(matched, 'function')
    }
  }

  otherSlice() {
    const regExp = /^\S/

    const matched = this.text.match(regExp)
    this.add(matched, 'normal')
  }

  slice() {
    while (this.text.length > 0) {
      this.stringSlice()
      this.commentSlice()
      this.regExpSlice()
      this.breakSlice()
      this.tabSlice()
      this.spaceSlice()
      this.numericSlice()
      this.reservedSlice()
      this.keywordSlice()
      this.identifierSlice()
      this.otherSlice()
    }

    return this.tokens
  }
}
