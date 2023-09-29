// Refer to https://mui.com/material-ui/react-text-field/

import styles from './text-field.module.scss'
import { classNames } from '@amatelas/tools'
import { AmatelasBaseProps } from '../../types/AmatelasBaseProps'
import { ComponentProps } from 'react'

type Variant = 'outlined' | 'filled' | 'standard'
type TextfieldType = 'text' | 'password'

type DefaultInputProps = ComponentProps<'input'>

interface TextFiledProps extends AmatelasBaseProps, DefaultInputProps {
  variant?: Variant
  type?: TextfieldType
  helper?: string
}

const getTextFieldVariantClass = (variant?: Variant) => {
  if (variant) {
    return styles[`${variant}-text-field`]
  }

  return styles['outlined-text-field']
}
const getPlaceholder = (placeholder?: string, required?: boolean) => {
  if (required) {
    return `${placeholder}*`
  }

  return placeholder
}
const getIsOutlined = (variant?: Variant) => {
  if (!variant) {
    return true
  }
  if (variant === 'outlined') {
    return true
  }

  return false
}

export const TextField = ({ variant, helper, ...props }: TextFiledProps) => {
  const textFieldVariantClass = getTextFieldVariantClass(variant)
  const placeholder = getPlaceholder(props.placeholder, props.required)
  const isOutlined = getIsOutlined(variant)
  return (
    <div>
      <div
        className={classNames(
          styles['text-field'],
          textFieldVariantClass,
          props.className
        )}
      >
        <input
          {...props}
          disabled={props.disabled}
          type={props.type}
          placeholder=" "
          className={styles['input']}
        />
        <label className={styles['placeholder']}>{placeholder}</label>
        {isOutlined ? (
          <span className={styles['placeholder-background']}>
            {placeholder}
          </span>
        ) : null}
      </div>
      {helper ? <div className={styles['helper']}>{helper}</div> : null}
    </div>
  )
}
