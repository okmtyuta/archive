import { ReactNode } from 'react'
import styles from './server-left-drawer.module.scss'
import { AmatelasBaseProps } from '../../../types'

interface ServerLeftDrawerProps extends AmatelasBaseProps {
  label: ReactNode
}

export const ServerLeftDrawer = (props: ServerLeftDrawerProps) => {
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
