import { HeadingToken, Token } from './types'

const headingTokenTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

export const isHeadingToken = (token: Token): token is HeadingToken => {
  if (headingTokenTypes.includes(token.tokenType)) {
    return true
  }

  return false
}
