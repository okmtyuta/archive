import { ReactNode } from 'react'
import { ExpandMore } from '../../../../materials/svg'
import { AmatelasBaseProps } from '../../../../types'
import styles from './static-accordion.module.scss'
import { classNames } from '../../../../../frontend-utils/function/classnames'

interface StaticAccordionProps extends AmatelasBaseProps {
  label: ReactNode
}

export const StaticAccordion = (props: StaticAccordionProps) => {
  const checkBoxId = crypto.randomUUID()
  return (
    <div className={classNames(styles['static-accordion'], props.className)}>
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
