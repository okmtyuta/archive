import { classNames } from '@amatelas/shared/function/classnames'
import { AmatelasBaseProps } from '../types'
import styles from './server-highlight.module.scss'

type Order = 'primary' | 'secondary' | 'tertiary'

interface ServerHighlightProps extends AmatelasBaseProps {
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

export const ServerHighlight = (props: ServerHighlightProps) => {
  return <span className={classNames(styles.highlight, getOrder(props.order))}>{props.children}</span>
}
