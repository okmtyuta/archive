import { classNames } from '../../../../../frontend-utils/function/classnames'
import { AmatelasBaseProps } from '../../../../types'
import styles from './filled-button.module.scss'

interface FilledButtonProps extends AmatelasBaseProps {}

export const FilledButton = (props: FilledButtonProps) => {
  return <button className={classNames(styles['filled-button'], props.className)}>{props.children}</button>
}
