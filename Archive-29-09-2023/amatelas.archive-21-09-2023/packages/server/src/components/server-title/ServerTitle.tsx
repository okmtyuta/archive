import { AmatelasBaseProps } from '../types'
import styles from './server-title.module.scss'

interface ServerTitleProps extends AmatelasBaseProps {
  posted?: string
  modified?: string
  tags?: string[]
}

export const ServerTitle = (props: ServerTitleProps) => {
  return (
    <div>
      {props.posted != null && <div className={styles.posted}>{props.posted}</div>}
      <div className={styles.title}>{props.children}</div>
      {props.tags != null && (
        <ul className={styles.tags}>
          {props.tags.map((tag) => {
            return (
              <li className={styles.tag}>
                {/* <LabelIcon fontSize="small" className={styles['tag-icon']} /> */}
                {tag}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
