import { classNames } from '../../../../../frontend-utils/function/classnames'
import { SetClientTextFieldValue } from '../../types/SetClientTextFieldValue'
import { TextFiledBaseProps } from '../../types/TextFieldBaseProps'
import styles from './filled-text-field.module.scss'

interface FilledTextFiledProps extends TextFiledBaseProps {
  placeholder: string
  className?: string
  setClientTextFieldValue?: SetClientTextFieldValue
}
type OnChangeEvent = React.ChangeEvent<HTMLInputElement>

export const FilledTextField = (props: FilledTextFiledProps) => {
  const onChange = (e: OnChangeEvent) => {
    const setClientTextFieldValue = props.setClientTextFieldValue
    if (setClientTextFieldValue) {
      setClientTextFieldValue((prev) => {
        return {
          ...prev,
          value: e.target.value
        }
      })
    }
  }
  return (
    <div className={classNames(styles['filled-text-field'], props.className)}>
      <input onChange={onChange} placeholder=" " className={styles['input']} />
      <label className={styles['placeholder']}>{props.placeholder}</label>
    </div>
  )
}
