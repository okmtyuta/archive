import { AmatelasBaseProps } from '../../types/AmatelasBaseProps'
import styles from './client-skeleton.module.scss'
import { classNames } from '@amatelas/tools'

interface ClientSkeletonProps extends AmatelasBaseProps {
  show?: boolean
}

const getHiddenClass = (show?: boolean) => {
  if (!show) {
    return styles['hidden']
  }

  return styles['show']
}

export const ClientSkeleton = (props: ClientSkeletonProps) => {
  const showClass = getHiddenClass(props.show)
  return (
    <div className={classNames(styles['skelton'], showClass)}>
      {props.children}
    </div>
  )
}
