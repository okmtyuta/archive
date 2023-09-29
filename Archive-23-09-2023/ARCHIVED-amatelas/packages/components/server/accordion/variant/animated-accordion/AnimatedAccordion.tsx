import { ReactNode } from 'react'
import { ExpandMore } from '../../../../materials/svg'
import { AmatelasBaseProps } from '../../../../types'
import styles from './animated-accordion.module.scss'
import { classNames } from '../../../../../frontend-utils/function/classnames'

interface AnimatedAccordionProps extends AmatelasBaseProps {
  label: ReactNode
}

export const AnimatedAccordion = (props: AnimatedAccordionProps) => {
  const checkBoxId = crypto.randomUUID()
  return (
    <>
      <input className={styles['input']} id={checkBoxId} type="checkbox" />
      <div className={classNames(styles['animated-accordion'], props.className)}>
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
    </>
  )
}
