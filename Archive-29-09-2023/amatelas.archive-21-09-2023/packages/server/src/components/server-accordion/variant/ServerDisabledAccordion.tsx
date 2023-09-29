import { ReactNode } from 'react'
import styles from './server-accordion.module.scss'
import { ExpandMore } from '@amatelas/shared/svg/ExpandMore'
import { classNames } from '@amatelas/shared/function/classnames'
import { AmatelasBaseProps } from '../../types'

interface ServerDisabledAccordionProps extends AmatelasBaseProps {
  label: ReactNode
  disabled?: boolean
}

export const ServerDisabledAccordion = (props: ServerDisabledAccordionProps) => {
  const checkBoxId = crypto.randomUUID()
  return (
    <div className={classNames(styles['disabled-accordion'], props.className)}>
      <input className={styles['input']} id={checkBoxId} type="checkbox" />
      <label className={styles['head']} htmlFor={checkBoxId}>
        <span className={styles['head-inner']}>
          <span>{props.label}</span>
          <span className={styles['head-icon']}>
            <ExpandMore />
          </span>
        </span>
      </label>
      <div className={styles['content']}>{props.children}</div>
    </div>
  )
}
