import { AmatelasBaseProps } from '@src/types/AmatelasBaseProps'
import styles from './alert.module.scss'
import {
  CloseSVG,
  CheckedCircleSVG,
  ErrorSVG,
  InfoSVG,
  WarningSVG,
  classNames
} from '@amatelas/tools'

type AlertVariant = 'info' | 'error' | 'warning' | 'success'

interface AlertProps extends AmatelasBaseProps {
  variant?: AlertVariant
  inputId?: string
  label?: string
}

const getVariantClass = (variant?: AlertVariant) => {
  if (variant) {
    return styles[variant]
  }

  return styles['info']
}
const getAlertIcon = (variant?: AlertVariant) => {
  const getAlertVariant = (variant?: AlertVariant) => {
    if (variant) {
      return variant
    }
    return 'info'
  }

  const alertVariant = getAlertVariant(variant)
  const iconClass = styles[`${alertVariant}-icon`]

  if (variant === 'success') {
    return (
      <CheckedCircleSVG
        className={classNames(styles['label-icon'], iconClass)}
      />
    )
  }
  if (variant === 'warning') {
    return (
      <WarningSVG className={classNames(styles['label-icon'], iconClass)} />
    )
  }
  if (variant === 'error') {
    return <ErrorSVG className={classNames(styles['label-icon'], iconClass)} />
  }

  return <InfoSVG className={classNames(styles['label-icon'], iconClass)} />
}
const getInputId = (inputId?: string) => {
  if (inputId) {
    return inputId
  }

  return crypto.randomUUID()
}

export const Alert = (props: AlertProps) => {
  const variantClass = getVariantClass(props.variant)
  const alertIcon = getAlertIcon(props.variant)
  const inputId = getInputId(props.inputId)

  return (
    <div className={classNames(styles['alert'], variantClass)}>
      <input className={styles['input']} type="checkbox" id={inputId} />
      <div>
        <div className={styles['label']}>
          {alertIcon}
          <span className={styles['label-content']}>{props.label}</span>
        </div>
        <div>{props.children}</div>
      </div>
      <span className={styles['close']}>
        <label className={styles['close-label']} htmlFor={inputId}>
          <CloseSVG className={styles['close-icon']} />
        </label>
      </span>
    </div>
  )
}
