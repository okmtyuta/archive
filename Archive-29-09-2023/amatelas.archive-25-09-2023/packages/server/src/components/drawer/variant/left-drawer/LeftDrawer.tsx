import { ReactNode } from 'react'
import styles from './left-drawer.module.scss'

interface LeftDrawerProps {
  children?: ReactNode
  label: ReactNode
}

export const LeftDrawer = (props: LeftDrawerProps) => {
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
