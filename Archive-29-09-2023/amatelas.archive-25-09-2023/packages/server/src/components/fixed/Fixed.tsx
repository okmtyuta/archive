import { ReactNode } from 'react'
import styles from './fixed.module.scss'
import positionalMarginStyles from '@theme/position/get-positional-margin.module.scss'
import {
  PositionalMargin,
  classNames,
  createGetPositionalMarginClass
} from '@amatelas/tools'

type FixedPosition = 'top' | 'bottom' | 'left' | 'right'

interface FixedProps {
  children?: ReactNode
  className?: string
  position?: FixedPosition
  positionalMargin?: PositionalMargin
}

const getPositionClass = (position?: FixedPosition) => {
  if (position) {
    return styles[`position-${position}`]
  }

  return styles['position-top']
}

export const Fixed = (props: FixedProps) => {
  const positionClass = getPositionClass(props.position)
  const positionalMarginClass = createGetPositionalMarginClass(
    positionalMarginStyles
  )(props.positionalMargin)
  return (
    <div
      className={classNames(
        styles['fixed'],
        positionClass,
        positionalMarginClass,
        props.className
      )}
    >
      {props.children}
    </div>
  )
}
