import { classNames } from '../../../../../../frontend-utils/function/classnames'
import { AmatelasBaseProps } from '../../../../../types'
import styles from './unclickable-filled-button.module.scss'

interface UnclickableFilledButtonProps extends AmatelasBaseProps {}

export const UnclickableFilledButton = (props: UnclickableFilledButtonProps) => {
  return <div className={classNames(styles['filled-button'], props.className)}>{props.children}</div>
}
