import { classNames } from '../../../../../../frontend-utils/function/classnames'
import { AmatelasBaseProps } from '../../../../../types'
import styles from './unclickable-outlined-button.module.scss'

interface UnclickableOutlinedButtonProps extends AmatelasBaseProps {}

export const UnclickableOutlinedButton = (props: UnclickableOutlinedButtonProps) => {
  return <div className={classNames(styles['outlined-button'], props.className)}>{props.children}</div>
}
