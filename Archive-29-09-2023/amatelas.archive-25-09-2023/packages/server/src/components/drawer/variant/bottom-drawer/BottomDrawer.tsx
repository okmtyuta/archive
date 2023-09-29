import { ReactNode } from 'react'
import styles from './bottom-drawer.module.scss'

interface BottomDrawerProps {
  children?: ReactNode
  label: ReactNode
}

export const BottomDrawer = (props: BottomDrawerProps) => {
  const checkBoxId = crypto.randomUUID()
  return (
    <div className={styles['drawer']}>
      <input type="checkbox" className={styles['input']} id={checkBoxId} />
      <label className={styles['label']} htmlFor={checkBoxId}>
        {props.label}
      </label>
      <label className={styles['background']} htmlFor={checkBoxId} />
      <div className={styles['drawer-content']}>
        <ul className={styles['drawer-i']}>{props.children}</ul>
      </div>
    </div>
  )
}
