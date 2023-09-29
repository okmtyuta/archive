import styles from './server-frame.module.scss'
import { AmatelasBaseProps } from '../types'

interface ServerFrameProps extends AmatelasBaseProps {}

export const ServerFrame = (props: ServerFrameProps) => {
  return <div className={styles['single-frame']}>{props.children}</div>
}
