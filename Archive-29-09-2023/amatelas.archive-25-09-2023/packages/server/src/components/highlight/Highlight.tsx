import { AmatelasBaseProps } from '@src/types/AmatelasBaseProps'
import styles from './highlight.module.scss'
import { classNames } from '@amatelas/tools'

type Color =
  | 'info'
  | 'success'
  | 'danger'
  | 'warning'
  | 'text'
  | 'primary'
  | 'secondary'
  | 'tertiary'

interface HighlightProps extends AmatelasBaseProps {
  color?: Color
}

const getColorClass = (color?: Color) => {
  if (color) {
    return styles[color]
  }

  return styles['primary']
}

export const Highlight = (props: HighlightProps) => {
  const colorClass = getColorClass(props.color)

  return (
    <span className={classNames(styles.highlight, colorClass)}>
      {props.children}
    </span>
  )
}
