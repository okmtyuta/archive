import { ReactNode } from 'react'
import { classNames } from '../../../frontend-utils/function/classnames'
import { AmatelasBaseProps } from '../../types'
import styles from './heading.module.scss'

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface HeadingProps extends AmatelasBaseProps {
  type?: HeadingType
  center?: boolean
}

const createHeading = (children?: ReactNode, type?: HeadingType, className?: string) => {
  if (type === 'h1') {
    return <h1 className={className ?? ''}>{children}</h1>
  } else if (type === 'h2') {
    return <h2 className={className ?? ''}>{children}</h2>
  } else if (type === 'h3') {
    return <h3 className={className ?? ''}>{children}</h3>
  } else if (type === 'h4') {
    return <h4 className={className ?? ''}>{children}</h4>
  } else if (type === 'h5') {
    return <h5 className={className ?? ''}>{children}</h5>
  } else if (type === 'h6') {
    return <h6 className={className ?? ''}>{children}</h6>
  }

  return <h1 className={className ?? ''}>{children}</h1>
}

export const Heading = (props: HeadingProps) => {
  const type = props.type ?? 'h1'
  const c = props.center ? styles['center'] : ''

  const elm = createHeading(props.children, props.type, classNames(styles[type], c))
  return elm
}
