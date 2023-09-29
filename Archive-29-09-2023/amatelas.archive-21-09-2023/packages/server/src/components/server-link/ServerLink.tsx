import { ComponentPropsWithoutRef, ElementType } from 'react'
import { ServerWrap } from '../server-wrap/ServerWrap'
import styles from './server-link.module.scss'
import { AmatelasBaseProps } from '../types'

type LinkProps<T extends ElementType> = {
  tag?: T
} & Omit<ComponentPropsWithoutRef<T>, 'tag'> &
  AmatelasBaseProps

export const ServerLink = <T extends ElementType = 'a'>(props: LinkProps<T>) => {
  const tag = props.tag ?? 'a'
  return (
    <ServerWrap className={`${props.className} ${styles['link']}`} tag={tag} {...props}>
      {props.children}
    </ServerWrap>
  )
}
