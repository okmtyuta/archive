import styles from './text-field.module.scss'
import { classNames, color } from '@amatelas/tools'
import { AmatelasBaseProps } from '../../types/AmatelasBaseProps'
import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'

const focusColor = color.suoh
const blurColor = color.accents3
const transitionTime = '0.3'

type Variant = 'outlined' | 'filled' | 'standard'
type TextfieldType = 'text' | 'password'

type InputProps = ComponentPropsWithoutRef<'input'>

interface TextFiledProps extends AmatelasBaseProps, InputProps {
  variant?: Variant
  type?: TextfieldType
  helper?: string
}

const getTextFieldVariantClass = (props: TextFiledProps) => {
  if (props.variant) {
    return styles[`${props.variant}-text-field`]
  }

  return styles['outlined-text-field']
}
const getPlaceholder = (props: TextFiledProps) => {
  if (props.required) {
    return `${props.placeholder}*`
  }

  return props.placeholder
}
const getIsOutlined = (props: TextFiledProps) => {
  if (!props.variant) {
    return true
  }
  if (props.variant === 'outlined') {
    return true
  }

  return false
}

const StyledTextField = styled.div`
  // background-color: red;
  position: relative;
  height: 50px;
  width: 100%;

  // default input
  .input {
    position: absolute;
    appearance: none;
    -webkit-appearance: none;
    font-size: 16px;
    border-radius: 0;
    width: 100%;
    padding: 0 12px;
    background-color: transparent;
    border: none;
    outline: none;
    left: 0;
    box-sizing: border-box;
  }

  // input if focused
  .input:focus {
    border: none;
    outline: none;
    border-radius: 0;
  }

  // default placeholder
  .placeholder {
    position: absolute;
    color: ${focusColor};
    transition: all ${transitionTime};
    transform-origin: 0;
    transform: scale(0.75);
    margin: 0 10px;
    padding: 0 2px;
  }

  // placeholder if input
  .input:placeholder-shown + .placeholder {
    position: absolute;
    color: ${blurColor};
    transition: all ${transitionTime};
    font-size: 16px;
    transform: scale(1);
    top: 16px;
    left: 0%;
    margin: 0 10px;
    padding: 0 2px;
  }

  // placeholder if focused
  .input:focus + .placeholder {
    position: absolute;
    color: ${focusColor};
    transition: all ${transitionTime};
    transform-origin: 0;
    transform: scale(0.75);
    left: 0;
  }
`

export const TextField = (props: TextFiledProps) => {
  const textFieldVariantClass = getTextFieldVariantClass(props)
  const placeholder = getPlaceholder(props)
  const isOutlined = getIsOutlined(props)
  return (
    <StyledTextField
      className={classNames(textFieldVariantClass, props.className)}
    >
      <div>
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
      {props.helper ? (
        <div className={styles['helper']}>{props.helper}</div>
      ) : null}
    </StyledTextField>
  )
}
