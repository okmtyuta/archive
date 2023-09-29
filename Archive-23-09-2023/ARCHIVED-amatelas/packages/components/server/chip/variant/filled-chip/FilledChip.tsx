import { ReactNode } from 'react'
import styles from './filled-chip.module.scss'
import { AmatelasBaseProps } from '../../../../types'

interface FilledChipProps extends AmatelasBaseProps {
  children?: ReactNode
}

export const FilledChip = (props: FilledChipProps) => {
  return (
    <div className={styles['filled-chip']}>
      <span className={styles['text']}>{props.children}</span>
    </div>
  )
}
