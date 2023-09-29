import { classNames } from '../../../../../frontend-utils/function/classnames'
import { AmatelasBaseProps } from '../../../../types'
import styles from './standard-button.module.scss'

interface StandardButtonProps extends AmatelasBaseProps {
  pointerEvent?: 'none'
}

export const StandardButton = (props: StandardButtonProps) => {
  return <button className={classNames(styles['button'], props.className)}>{props.children}</button>
}
