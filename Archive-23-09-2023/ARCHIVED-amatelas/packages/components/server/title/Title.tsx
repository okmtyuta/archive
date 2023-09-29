import { AmatelasBaseProps } from '../../types'
import styles from './title.module.scss'

interface TitleProps extends AmatelasBaseProps {
  posted?: string
  modified?: string
  tags?: string[]
}

export const Title = (props: TitleProps) => {
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
