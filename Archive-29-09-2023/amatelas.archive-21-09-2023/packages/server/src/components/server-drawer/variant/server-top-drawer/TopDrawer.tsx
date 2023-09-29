import { ReactNode } from 'react'
import styles from './server-top-drawer.module.scss'
import { AmatelasBaseProps } from '../../../types'

interface ServerTopDrawerProps extends AmatelasBaseProps {
  label: ReactNode
}

export const ServerTopDrawer = (props: ServerTopDrawerProps) => {
  const checkBoxId = crypto.randomUUID()
  return (
    <div className={styles['drawer']}>
      <input type="checkbox" className={styles['input']} id={checkBoxId} />
      <label className={styles['label']} htmlFor={checkBoxId}>
        {props.label}
      </label>
      <label className={styles['background']} htmlFor={checkBoxId} />
      <div className={styles['drawer-content']}>{props.children}</div>
    </div>
  )
}
