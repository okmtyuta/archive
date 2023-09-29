import { classNames } from '@amatelas/tools'
import styles from './frame.module.scss'
import { AmatelasBaseProps } from '../../types/AmatelasBaseProps'
import { Typography } from '../..'
import { ComponentProps } from 'react'

type TypographyProps = ComponentProps<typeof Typography>

type FrameWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

type FrameProps = {
  width?: FrameWidth
} & AmatelasBaseProps &
  TypographyProps

const getWidthClass = (width?: FrameWidth) => {
  if (width) {
    return styles[width]
  }

  return styles['md']
}

export const Frame = ({ children, className, width, ...props }: FrameProps) => {
  const widthClass = getWidthClass(width)
  return (
    <Typography
      {...props}
      tag="div"
      className={classNames(styles['frame'], widthClass, className)}
    >
      {children}
    </Typography>
  )
}
