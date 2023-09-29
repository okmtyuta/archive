import { ReactNode } from 'react'
import styles from './frame.module.scss'

interface SingleFrameProps {
  children: ReactNode
}

export const SingleFrame = (props: SingleFrameProps) => {
  return <div className={styles['single-frame']}>{props.children}</div>
}
