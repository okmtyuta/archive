import { ReactNode } from 'react'
import styles from './media-query.module.scss'

interface MediaQueryProps {
  components: {
    sp: ReactNode
    tab: ReactNode
    pc: ReactNode
  }
}

export const MediaQuery = (props: MediaQueryProps) => {
  return (
    <span>
      <span className={styles['sp']}>{props.components.sp}</span>
      <span className={styles['tab']}>{props.components.tab}</span>
      <span className={styles['pc']}>{props.components.pc}</span>
    </span>
  )
}
