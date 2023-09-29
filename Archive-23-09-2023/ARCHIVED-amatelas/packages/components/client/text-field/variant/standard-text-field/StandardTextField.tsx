import { classNames } from '../../../../../frontend-utils/function/classnames'
import { TextFiledBaseProps } from '../../types/TextFieldBaseProps'
import styles from './standard-text-field.module.scss'

interface StandardTextFiledProps extends TextFiledBaseProps {
  placeholder: string
}

export const StandardTextField = (props: StandardTextFiledProps) => {
  return (
    <div className={classNames(styles['standard-text-field'], props.className)}>
      <input placeholder=" " className={styles['input']} />
      <label className={styles['placeholder']}>{props.placeholder}</label>
    </div>
  )
}
