import { classNames } from '../../../frontend-utils/function/classnames'
import { AmatelasBaseProps } from '../../types'
import styles from './paragraph.module.scss'

interface ParagraphProps extends AmatelasBaseProps {
  justify?: boolean
}

const getJustify = (justify?: boolean) => {
  if (justify) {
    return styles['justify']
  }

  return ''
}

export const Paragraph = (props: ParagraphProps) => {
  return <p className={classNames(styles['paragraph'], getJustify(props.justify), props.className)}>{props.children}</p>
}
