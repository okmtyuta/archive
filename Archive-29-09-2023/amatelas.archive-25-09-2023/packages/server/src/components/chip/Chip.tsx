// Refer to https://mui.com/material-ui/react-chip/

import { ComponentProps, ReactNode } from 'react'
import { AmatelasBaseProps } from '@src/types/AmatelasBaseProps'
import styles from './chip.module.scss'
import { classNames } from '@amatelas/tools'

type Variant = 'filled' | 'outlined'
type Color = 'text' | 'danger' | 'info' | 'success' | 'warning'

type DefaultSpanProps = ComponentProps<'span'>

interface ChipProps extends AmatelasBaseProps, DefaultSpanProps {
  children?: ReactNode
  variant?: Variant
  color?: Color
  shade?: boolean
}

const getVariantClass = (variant?: Variant) => {
  if (variant) {
    return styles[`${variant}-chip`]
  }

  return styles['outlined-chip']
}
const getColorClass = (color?: Color) => {
  if (color) {
    return styles[color]
  }

  return styles['text']
}
const getShadeClass = (shade?: boolean) => {
  if (shade) {
    return styles['shade']
  }

  return ''
}

export const Chip = ({
  children,
  variant,
  color,
  shade,
  ...props
}: ChipProps) => {
  const variantClass = getVariantClass(variant)
  const colorClass = getColorClass(color)
  const shadeClass = getShadeClass(shade)
  return (
    <span
      {...props}
      className={classNames(
        styles['chip'],
        variantClass,
        colorClass,
        shadeClass
      )}
    >
      <span className={styles['text']}>{children}</span>
    </span>
  )
}
