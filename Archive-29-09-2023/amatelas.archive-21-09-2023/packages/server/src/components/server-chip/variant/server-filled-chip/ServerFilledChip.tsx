import { ReactNode } from 'react'
import styles from './server-filled-chip.module.scss'
import { AmatelasBaseProps } from '../../../types'

interface ServerFilledChipProps extends AmatelasBaseProps {
  children?: ReactNode
}

export const ServerFilledChip = (props: ServerFilledChipProps) => {
  return (
    <div className={styles['filled-chip']}>
      <span className={styles['text']}>{props.children}</span>
    </div>
  )
}
