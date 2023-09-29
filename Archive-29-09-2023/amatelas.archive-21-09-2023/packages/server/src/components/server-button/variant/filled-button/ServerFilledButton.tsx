import { classNames } from '@amatelas/shared/function/classnames'
import { AmatelasBaseProps } from '../../../types'
import styles from './server-filled-button.module.scss'

interface ServerFilledButtonProps extends AmatelasBaseProps {}

export const ServerFilledButton = (props: ServerFilledButtonProps) => {
  return <button className={classNames(styles['filled-button'], props.className)}>{props.children}</button>
}
