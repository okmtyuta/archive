import { ReactNode } from 'react'
import styles from './right-drawer.module.scss'

interface RightDrawerProps {
  children?: ReactNode
  label: ReactNode
}

export const RightDrawer = (props: RightDrawerProps) => {
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
