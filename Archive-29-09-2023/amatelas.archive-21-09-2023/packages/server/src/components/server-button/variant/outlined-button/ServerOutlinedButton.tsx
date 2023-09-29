import { classNames } from '@amatelas/shared/function/classnames'
import { AmatelasBaseProps } from '../../../types'
import styles from './server-outlined-button.module.scss'

interface ServerOutlinedButtonProps extends AmatelasBaseProps {}

export const ServerOutlinedButton = (props: ServerOutlinedButtonProps) => {
  return <button className={classNames(styles['outlined-button'], props.className)}>{props.children}</button>
}
