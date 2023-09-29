import { classNames } from '@amatelas/tools'

import styles from './list.module.scss'
import { AmatelasBaseProps } from '../../types/AmatelasBaseProps'

type Gap = 'xs' | 'md' | 'xl'
type Margin = 'xs' | 'md' | 'xl'

interface ListProps extends AmatelasBaseProps {
  ordered?: boolean
  gap?: Gap
  margin?: Margin
}
interface ListItemProps extends AmatelasBaseProps {}

const getGapClass = (gap?: Gap) => {
  if (gap) {
    return styles[`gap-${gap}`]
  }

  return styles['gap-md']
}
const getMarginClass = (margin?: Margin) => {
  if (margin) {
    return styles[`margin-${margin}`]
  }

  return styles['margin-md']
}

export const List = (props: ListProps) => {
  const gapClass = getGapClass(props.gap)
  const marginClass = getMarginClass(props.margin)
  if (props.ordered) {
    return (
      <ol
        className={classNames(
          styles['list'],
          styles['ordered'],
          gapClass,
          marginClass,
          props.className
        )}
      >
        {props.children}
      </ol>
    )
  }
  return (
    <ul
      className={classNames(
        styles['list'],
        styles['unordered'],
        gapClass,
        marginClass,
        props.className
      )}
    >
      {props.children}
    </ul>
  )
}

export const ListItem = (props: ListItemProps) => {
  return <li className={styles['list-item']}>{props.children}</li>
}
