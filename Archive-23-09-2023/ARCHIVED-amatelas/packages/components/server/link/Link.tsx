import { ComponentPropsWithoutRef, ElementType } from 'react'
import { AmatelasBaseProps } from '../../types'
import { Wrap } from '../wrap/Wrap'
import styles from './link.module.scss'

type LinkProps<T extends ElementType> = {
  tag?: T
} & Omit<ComponentPropsWithoutRef<T>, 'tag'> &
  AmatelasBaseProps

export const Link = <T extends ElementType = 'a'>(props: LinkProps<T>) => {
  const tag = props.tag ?? 'a'
  return (
    <Wrap className={`${props.className} ${styles['link']}`} tag={tag} {...props}>
      {props.children}
    </Wrap>
  )
}
