import { AmatelasBaseProps } from '@src/types/AmatelasBaseProps'
import styles from './flex.module.scss'
import {
  Margin,
  Padding,
  classNames,
  createGetMarginClass,
  createGetPaddingClass
} from '@amatelas/tools'
import { ComponentPropsWithoutRef, ElementType } from 'react'
import { Width, getWidthClass } from '@src/utils/common/width'

import getPaddingClassStyles from '@theme/padding/get-padding-class.module.scss'
import getMarginClassStyles from '@theme/margin/get-margin-class.module.scss'

type FlexProps<T extends ElementType> = {
  tag?: T
  inline?: boolean
  padding?: Padding
  margin?: Margin
  width?: Width
} & Omit<ComponentPropsWithoutRef<T>, 'tag'> &
  AmatelasBaseProps

const getInlineClass = (inline?: boolean) => {
  if (inline) {
    return styles['inline']
  }

  return styles['block']
}

export const Flex = <T extends ElementType = 'div'>({
  tag,
  inline,
  margin,
  padding,
  width,
  ...props
}: FlexProps<T>) => {
  const Tag = tag || 'div'
  const marginClass = createGetMarginClass(
    getPaddingClassStyles,
    'none'
  )(margin)
  const paddingClass = createGetPaddingClass(
    getMarginClassStyles,
    'none'
  )(padding)
  const widthClass = getWidthClass(width)
  const inlineClass = getInlineClass(inline)

  return (
    <Tag
      {...props}
      className={classNames(
        styles['flex'],
        paddingClass,
        marginClass,
        widthClass,
        inlineClass
      )}
    >
      {props.children}
    </Tag>
  )
}
