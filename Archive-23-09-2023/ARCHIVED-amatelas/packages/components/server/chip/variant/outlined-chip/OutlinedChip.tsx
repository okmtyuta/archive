import { ReactNode } from 'react'
import styles from './outlined-chip.module.scss'
import { AmatelasBaseProps } from '../../../../types'

interface OutlinedChipProps extends AmatelasBaseProps {
  children?: ReactNode
}

export const OutlinedChip = (props: OutlinedChipProps) => {
  return (
    <div className={styles['outlined-chip']}>
      <span className={styles['text']}>{props.children}</span>
    </div>
  )
}
