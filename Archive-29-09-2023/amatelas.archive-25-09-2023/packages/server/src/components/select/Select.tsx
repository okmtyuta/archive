import { ComponentProps } from 'react'
import styles from './select.module.scss'

type DefaultSelectProps = ComponentProps<'select'>
type SelectProps = DefaultSelectProps

export const Select = ({ children, ...props }: SelectProps) => {
  return (
    <select {...props} className={styles['select']}>
      {children}
    </select>
  )
}
