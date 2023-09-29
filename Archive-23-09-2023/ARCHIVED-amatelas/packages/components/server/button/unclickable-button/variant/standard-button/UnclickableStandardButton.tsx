import { classNames } from '../../../../../../frontend-utils/function/classnames'
import { AmatelasBaseProps } from '../../../../../types'
import styles from './unclickable-standard-button.module.scss'

interface UnclickableStandardButtonProps extends AmatelasBaseProps {
  pointerEvent?: 'none'
}

export const UnclickableStandardButton = (props: UnclickableStandardButtonProps) => {
  return <div className={classNames(styles['button'], props.className)}>{props.children}</div>
}
