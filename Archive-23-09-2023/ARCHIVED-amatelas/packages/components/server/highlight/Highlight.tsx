import { classNames } from '../../../frontend-utils/function/classnames'
import { AmatelasBaseProps } from '../../types'

import styles from './highlight.module.scss'

type Order = 'primary' | 'secondary' | 'tertiary'

interface HighlightProps extends AmatelasBaseProps {
  order?: Order
}

const getOrder = (order?: Order) => {
  if (order === 'primary') {
    return styles.primary
  }
  if (order === 'secondary') {
    return styles.secondary
  }
  if (order === 'tertiary') {
    return styles.tertiary
  }

  return styles.primary
}

export const Highlight = (props: HighlightProps) => {
  return <span className={classNames(styles.highlight, getOrder(props.order))}>{props.children}</span>
}
