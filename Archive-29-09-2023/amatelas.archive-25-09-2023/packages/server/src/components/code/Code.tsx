// import SyntaxHighlighter from 'react-syntax-highlighter'

// import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { AmatelasBaseProps } from '../../types/AmatelasBaseProps'
// import { ReactNode } from 'react'
import { Typography } from '../..'

interface CodeProps extends AmatelasBaseProps {
  children: string
  language?: string
}

// const code = ({ children }: { children: ReactNode }) => {
//   return (
//     <Typography fontFamily="inconsolata" tag="code">
//       {children}
//     </Typography>
//   )
// }

export const Code = (props: CodeProps) => {
  return (
    // <SyntaxHighlighter CodeTag={code} language={props.language} style={tomorrow}>
    //   {props.children}
    // </SyntaxHighlighter>
    <Typography fontFamily="inconsolata" tag="code">
      {props.children}
    </Typography>
  )
}
