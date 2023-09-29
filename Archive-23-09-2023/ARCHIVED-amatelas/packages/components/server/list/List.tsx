import { AmatelasBaseProps } from '../../types'
import styles from './list.module.scss'

interface ListProps extends AmatelasBaseProps {
  marker?: JSX.Element | string
}
interface ListItemProps extends AmatelasBaseProps {
  marker?: JSX.Element | string
}

export const List = (props: ListProps) => {
  return <ul className={props.className}>{props.children}</ul>
}

export const ListItem = (props: ListItemProps) => {
  return (
    <li className={styles['list-item']}>
      <span>{props.marker}</span>
      <span>{props.children}</span>
    </li>
  )
}
