import { ReactNode } from 'react'
import styles from './server-outlined-chip.module.scss'
import { AmatelasBaseProps } from '../../../types'

interface ServerOutlinedChipProps extends AmatelasBaseProps {
  children?: ReactNode
}

export const ServerOutlinedChip = (props: ServerOutlinedChipProps) => {
  return (
    <div className={styles['outlined-chip']}>
      <span className={styles['text']}>{props.children}</span>
    </div>
  )
}
