import { ReactNode } from 'react'
import styles from './sticky.module.scss'
import { classNames } from '@amatelas/tools'

type StickyPosition = 'top' | 'bottom' | 'left' | 'right'

interface StickyProps {
  children?: ReactNode
  className?: string
  position?: StickyPosition
}

const getPositionClass = (position?: StickyPosition) => {
  if (position) {
    return styles[`position-${position}`]
  }

  return styles['position-top']
}

export const Sticky = (props: StickyProps) => {
  const positionClass = getPositionClass(props.position)

  return (
    <div
      className={classNames(
        styles['sticky'],
        positionClass,

        props.className
      )}
    >
      {props.children}
    </div>
  )
}
