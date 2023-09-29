// Refer to https://mui.com/material-ui/react-alert/

import {
  CheckedCircleSVG,
  ErrorSVG,
  InfoSVG,
  WarningSVG,
  classNames
} from '@amatelas/tools'
import { AmatelasBaseProps } from '../../types/AmatelasBaseProps'
import styles from './message.module.scss'

type MessageVariant = 'info' | 'success' | 'warning' | 'error'

interface MessageProps extends AmatelasBaseProps {
  variant?: MessageVariant
  monochrome?: boolean
}

const getMessageVariant = (variant?: MessageVariant) => {
  if (variant) {
    return variant
  }

  return 'info'
}
const getMessageVariantClass = (variant?: MessageVariant) => {
  if (variant) {
    return styles[variant]
  }

  return styles['info']
}
const getMessageIcon = (variant?: MessageVariant) => {
  const messageVariant = getMessageVariant(variant)
  const iconClass = styles[`${messageVariant}-icon`]
  if (variant === 'success') {
    return (
      <CheckedCircleSVG className={classNames(styles['icon-svg'], iconClass)} />
    )
  }
  if (variant === 'warning') {
    return <WarningSVG className={classNames(styles['icon-svg'], iconClass)} />
  }
  if (variant === 'error') {
    return <ErrorSVG className={classNames(styles['icon-svg'], iconClass)} />
  }

  return <InfoSVG className={classNames(styles['icon-svg'], iconClass)} />
}
const getMessageThemeClass = (monochrome?: boolean) => {
  if (monochrome) {
    return styles['monochrome']
  }

  return styles['colorful']
}

export const Message = (props: MessageProps) => {
  const messageThemeClass = getMessageThemeClass(props.monochrome)
  const messageVariantClass = getMessageVariantClass(props.variant)
  const messageIcon = getMessageIcon(props.variant)
  return (
    <div
      className={classNames(
        styles['message'],
        messageThemeClass,
        messageVariantClass
      )}
    >
      <div className={styles['icon']}>{messageIcon}</div>
      <div className={styles['content']}>{props.children}</div>
    </div>
  )
}
