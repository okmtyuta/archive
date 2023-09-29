import { AmatelasBaseProps } from '@src/types/AmatelasBaseProps'
import {
  Margin,
  Padding,
  classNames,
  createGetMarginClass,
  createGetPaddingClass
} from '@amatelas/tools'
import { ComponentPropsWithoutRef, ElementType } from 'react'
import { Width, getWidthClass } from '@src/utils/common/width'

import styles from './container.module.scss'
import getPaddingClassStyles from '@theme/padding/get-padding-class.module.scss'
import getMarginClassStyles from '@theme/margin/get-margin-class.module.scss'

type ContainerProps<T extends ElementType> = {
  tag?: T
  padding?: Padding
  margin?: Margin
  width?: Width
} & Omit<ComponentPropsWithoutRef<T>, 'tag'> &
  AmatelasBaseProps

export const Container = <T extends ElementType = 'div'>({
  tag,
  margin,
  padding,
  width,
  ...props
}: ContainerProps<T>) => {
  const Tag = tag || 'div'
  const marginClass = createGetMarginClass(getMarginClassStyles)(margin)
  const paddingClass = createGetPaddingClass(getPaddingClassStyles)(padding)
  const widthClass = getWidthClass(width)

  return (
    <Tag
      {...props}
      className={classNames(
        styles['container'],
        paddingClass,
        marginClass,
        widthClass
      )}
    >
      {props.children}
    </Tag>
  )
}
