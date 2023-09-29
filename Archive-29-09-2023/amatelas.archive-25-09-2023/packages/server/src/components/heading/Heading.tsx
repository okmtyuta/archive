import { createElement } from 'react'
import styles from './heading.module.scss'
import { classNames } from '@amatelas/tools'
import { AmatelasBaseProps } from '../../types/AmatelasBaseProps'

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface HeadingProps extends AmatelasBaseProps {
  type?: HeadingType
  center?: boolean
  noMargin?: boolean
}

const getHeadingType = (type?: HeadingType) => {
  if (type) {
    return type
  }

  return 'h1'
}

const getCenterClass = (center?: boolean) => {
  if (center) {
    return styles['center']
  }
}
const getMarginClass = (noMargin?: boolean) => {
  if (noMargin) {
    return styles['no-margin']
  }

  return styles['margin']
}

export const Heading = (props: HeadingProps) => {
  const type = getHeadingType(props.type)
  const centerClass = getCenterClass(props.center)
  const marginClass = getMarginClass(props.noMargin)

  const heading = createElement(type, {
    children: props.children,
    className: classNames(styles[type], centerClass, marginClass)
  })

  return heading
}
