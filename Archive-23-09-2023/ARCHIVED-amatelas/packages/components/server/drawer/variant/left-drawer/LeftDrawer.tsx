import { ReactNode } from 'react'
import { AmatelasBaseProps } from '../../../../types'
import styles from './left-drawer.module.scss'

interface BottomDrawerProps extends AmatelasBaseProps {
  label: ReactNode
}

export const LeftDrawer = (props: BottomDrawerProps) => {
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
