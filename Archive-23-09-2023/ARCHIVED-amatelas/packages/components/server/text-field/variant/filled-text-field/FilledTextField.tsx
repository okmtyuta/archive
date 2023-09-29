import { classNames } from '../../../../../frontend-utils/function/classnames'
import { TextFiledBaseProps } from '../../types/TextFieldBaseProps'
import styles from './filled-text-field.module.scss'

interface FilledTextFiledProps extends TextFiledBaseProps {
  placeholder: string
  className?: string
}

export const FilledTextField = (props: FilledTextFiledProps) => {
  return (
    <div className={classNames(styles['filled-text-field'], props.className)}>
      <input placeholder=" " className={styles['input']} />
      <label className={styles['placeholder']}>{props.placeholder}</label>
    </div>
  )
}
