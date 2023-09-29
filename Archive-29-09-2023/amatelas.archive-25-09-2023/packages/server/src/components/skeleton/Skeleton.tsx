import { AmatelasBaseProps } from '@src/types/AmatelasBaseProps'
import styles from './skeleton.module.scss'
import { classNames } from '@amatelas/tools'

interface SkeletonProps extends AmatelasBaseProps {
  show?: boolean
}

const getHiddenClass = (show?: boolean) => {
  if (!show) {
    return styles['hidden']
  }

  return styles['show']
}

export const Skeleton = (props: SkeletonProps) => {
  const hiddenClass = getHiddenClass(props.show)
  return (
    <div className={classNames(styles['skelton'], hiddenClass)}>
      <div className={styles['content']}>{props.children}</div>
    </div>
  )
}
