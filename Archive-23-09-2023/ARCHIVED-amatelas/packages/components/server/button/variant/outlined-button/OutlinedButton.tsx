import { classNames } from '../../../../../frontend-utils/function/classnames'
import { AmatelasBaseProps } from '../../../../types'
import styles from './outlined-button.module.scss'

interface OutlinedButtonProps extends AmatelasBaseProps {}

export const OutlinedButton = (props: OutlinedButtonProps) => {
  return <button className={classNames(styles['outlined-button'], props.className)}>{props.children}</button>
}
