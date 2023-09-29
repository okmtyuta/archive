import { ComponentPropsWithoutRef, ElementType } from 'react'
import styles from './link.module.scss'
import { AmatelasBaseProps } from '../../types/AmatelasBaseProps'
import { classNames } from '@amatelas/tools'
import { NorthEastSVG } from '@amatelas/tools'

type LinkProps<T extends ElementType> = {
  tag?: T
  underlined?: boolean
  external?: boolean
} & Omit<ComponentPropsWithoutRef<T>, 'tag'> &
  AmatelasBaseProps

const getUnderlineClass = (underlined?: boolean) => {
  if (underlined) {
    return styles['underline']
  }
}

export const Link = <T extends ElementType = 'a'>({
  tag,
  children,
  underlined,
  external,
  ...props
}: LinkProps<T>) => {
  const Tag = tag ?? 'a'
  const underlineClass = getUnderlineClass(underlined)
  return (
    <Tag
      {...props}
      className={classNames(underlineClass, styles['link'], props.className)}
    >
      <span>{children}</span>{' '}
      {external ? <NorthEastSVG className={styles['north-east-svg']} /> : null}
    </Tag>
  )
}
