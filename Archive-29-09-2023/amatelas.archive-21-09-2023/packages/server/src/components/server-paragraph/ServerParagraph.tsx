import { classNames } from '@amatelas/shared/function/classnames'
import { AmatelasBaseProps } from '../types'
import styles from './server-paragraph.module.scss'

interface ServerParagraphProps extends AmatelasBaseProps {
  justify?: boolean
}

const getJustify = (justify?: boolean) => {
  if (justify) {
    return styles['justify']
  }

  return ''
}

export const ServerParagraph = (props: ServerParagraphProps) => {
  return <p className={classNames(styles['paragraph'], getJustify(props.justify), props.className)}>{props.children}</p>
}
