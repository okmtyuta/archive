import { AmatelasBaseProps } from '../types'
import styles from './server-list.module.scss'

interface ServerListProps extends AmatelasBaseProps {
  marker?: JSX.Element | string
}
interface ServerListItemProps extends AmatelasBaseProps {
  marker?: JSX.Element | string
}

export const ServerList = (props: ServerListProps) => {
  return <ul className={props.className}>{props.children}</ul>
}

export const ServerListItem = (props: ServerListItemProps) => {
  return (
    <li className={styles['list-item']}>
      <span>{props.marker}</span>
      <span>{props.children}</span>
    </li>
  )
}
