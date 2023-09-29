import { classNames } from '../../../../../../frontend-utils/function/classnames'
import { TextFiledBaseProps } from '../../types/TextFieldBaseProps'
import styles from './outlined-text-field.module.scss'

interface OutlinedTextFiledProps extends TextFiledBaseProps {
  placeholder: string
}

export const OutlinedTextField = (props: OutlinedTextFiledProps) => {
  return (
    <div className={classNames(styles['text-field'], props.className)}>
      <input placeholder=" " className={styles['input']} />
      <label className={styles['placeholder']}>{props.placeholder}</label>
      <span className={styles['placeholder-background']}>{props.placeholder}</span>
    </div>
  )
}
