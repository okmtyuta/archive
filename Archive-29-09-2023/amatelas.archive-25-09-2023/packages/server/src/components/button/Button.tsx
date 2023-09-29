// Refer to https://mui.com/material-ui/react-button/

import { AmatelasBaseProps } from '@src/types/AmatelasBaseProps'
import styles from './button.module.scss'
import { classNames } from '@amatelas/tools'
import { ComponentProps } from 'react'

type Variant = 'standard' | 'outlined' | 'filled'
type Color = 'text' | 'danger' | 'info' | 'success' | 'warning'

type DefaultButtonProps = ComponentProps<'button'>

interface ButtonProps extends AmatelasBaseProps, DefaultButtonProps {
  variant?: Variant
  color?: Color
  shade?: boolean
}

const getTextAreaVariantClass = (variant?: Variant) => {
  if (variant) {
    return styles[`${variant}-button`]
  }

  return styles['outlined-button']
}
const getColorClass = (color?: Color) => {
  if (color) {
    return styles[`${color}`]
  }

  return styles['text']
}
const getShadeClass = (shade?: boolean) => {
  if (shade) {
    return styles['shade']
  }

  return ''
}

export const Button = ({
  variant,
  color,
  shade,
  children,
  ...props
}: ButtonProps) => {
  const variantClass = getTextAreaVariantClass(variant)
  const colorClass = getColorClass(color)
  const shadeClass = getShadeClass(shade)

  return (
    <button
      {...props}
      className={classNames(
        styles['button'],
        variantClass,
        colorClass,
        shadeClass
      )}
    >
      {children}
    </button>
  )
}
