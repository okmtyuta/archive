import { ReactNode } from 'react'
import styles from './server-right-drawer.module.scss'
import { AmatelasBaseProps } from '../../../types'

interface ServerRightDrawerProps extends AmatelasBaseProps {
  label: ReactNode
}

export const ServerRightDrawer = (props: ServerRightDrawerProps) => {
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
