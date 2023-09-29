import { classNames } from '@amatelas/shared/function/classnames'
import { AmatelasBaseProps } from '../../../types'
import styles from './server-standard-button.module.scss'

interface ServerStandardButtonProps extends AmatelasBaseProps {}

export const ServerStandardButton = (props: ServerStandardButtonProps) => {
  return <button className={classNames(styles['button'], props.className)}>{props.children}</button>
}
