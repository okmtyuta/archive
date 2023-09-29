import { classNames, AccountSVG } from '@amatelas/tools'
import styles from './avatar.module.scss'
import { AmatelasBaseProps } from '../../types/AmatelasBaseProps'

interface AvatarProps extends AmatelasBaseProps {
  name?: string
  account?: string
  iconUrl?: string
}

const getIcon = (iconUrl?: string) => {
  if (iconUrl) {
    return <img className={styles['avatar-image']} src={iconUrl} />
  }

  return <AccountSVG className={styles['avatar-image']} />
}

export const Avatar = (props: AvatarProps) => {
  const icon = getIcon(props.iconUrl)
  return (
    <span className={classNames(styles['avatar'], props.className)}>
      <span>
        <div>{icon}</div>
      </span>
      <span className={styles['avatar-info']}>
        <span className={styles['avatar-name']}>{props.name}</span>
        <span className={styles['avatar-account']}>{props.account}</span>
      </span>
    </span>
  )
}
