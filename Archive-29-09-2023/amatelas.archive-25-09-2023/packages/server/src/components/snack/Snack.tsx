// Refer to https://mui.com/material-ui/react-snackbar/

import { AmatelasBaseProps } from '@src/types/AmatelasBaseProps'
import styles from './snack.module.scss'
import {
  CloseSVG,
  CheckedCircleSVG,
  ErrorSVG,
  InfoSVG,
  WarningSVG,
  classNames
} from '@amatelas/tools'

type SnackVariant = 'info' | 'error' | 'warning' | 'success'
type SnackPosition = 'top' | 'bottom' | 'left' | 'right'

interface SnackProps extends AmatelasBaseProps {
  variant?: SnackVariant
  inputId?: string
  label?: string
  position?: SnackPosition
}

const getVariantClass = (variant?: SnackVariant) => {
  if (variant) {
    return styles[variant]
  }

  return styles['info']
}
const getSnackIcon = (variant?: SnackVariant) => {
  const getSnackVariant = (variant?: SnackVariant) => {
    if (variant) {
      return variant
    }
    return 'info'
  }

  const snackVariant = getSnackVariant(variant)
  const iconClass = styles[`${snackVariant}-icon`]

  if (variant === 'success') {
    return (
      <CheckedCircleSVG
        className={classNames(styles['snack-icon'], iconClass)}
      />
    )
  }
  if (variant === 'warning') {
    return (
      <WarningSVG className={classNames(styles['snack-icon'], iconClass)} />
    )
  }
  if (variant === 'error') {
    return <ErrorSVG className={classNames(styles['snack-icon'], iconClass)} />
  }

  return <InfoSVG className={classNames(styles['snack-icon'], iconClass)} />
}
const getInputId = (inputId?: string) => {
  if (inputId) {
    return inputId
  }

  return crypto.randomUUID()
}
const getPositionClass = (position?: SnackPosition) => {
  if (position) {
    return styles[`position-${position}`]
  }

  return styles['position-top']
}

export const Snack = (props: SnackProps) => {
  const variantClass = getVariantClass(props.variant)
  const snackIcon = getSnackIcon(props.variant)
  const inputId = getInputId(props.inputId)
  const positionClass = getPositionClass(props.position)

  return (
    <div className={classNames(styles['snack'], variantClass, positionClass)}>
      <input className={styles['input']} type="checkbox" id={inputId} />
      {snackIcon}
      <div>{props.children}</div>
      <label className={styles['close-icon']} htmlFor={inputId}>
        <CloseSVG />
      </label>
    </div>
  )
}
