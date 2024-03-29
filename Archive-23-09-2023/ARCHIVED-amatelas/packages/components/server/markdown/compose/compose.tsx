import { Heading } from '../../heading/Heading'
import { Highlight } from '../../highlight/Highlight'
import { Paragraph } from '../../paragraph/Paragraph'
import { isHeadingToken } from '../types/gurad'
import { HeadingToken, Token } from '../types/types'

// interface Element {
//   type: ""
// }

export const compose = (tokens: Token[] | HeadingToken[]): JSX.Element[] => {
  const elements = []

  for (const token of tokens) {
    if (token.tokenType === 'text') {
      const textElement = <span key={crypto.randomUUID()}>{token.children}</span>
      elements.push(textElement)
    } else if (token.tokenType === 'bold') {
      const children = compose(token.children)
      const boldElement = <Highlight key={crypto.randomUUID()}>{children}</Highlight>
      elements.push(boldElement)
    } else if (token.tokenType === 'italic') {
      const children = compose(token.children)
      const italicElement = <i key={crypto.randomUUID()}>{children}</i>
      elements.push(italicElement)
    } else if (token.tokenType === 'normal') {
      const children = compose(token.children)
      const normalElement = <span key={crypto.randomUUID()}>{children}</span>
      elements.push(normalElement)
    } else if (token.tokenType === 'paragraph') {
      const children = compose(token.children)
      const paragraphElement = <Paragraph key={crypto.randomUUID()}>{children}</Paragraph>
      elements.push(paragraphElement)
    } else if (isHeadingToken(token)) {
      const headingElement = (
        <Heading key={crypto.randomUUID()} type={token.tokenType}>
          {token.children}
        </Heading>
      )
      elements.push(headingElement)
    }
  }

  return elements
}
