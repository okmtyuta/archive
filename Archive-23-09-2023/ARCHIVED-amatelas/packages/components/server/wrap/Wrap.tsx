import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

// Referred from https://zenn.dev/sho_ts/articles/ff3082b1e3db5f

type WrapProps<T extends ElementType> = {
  tag?: T
  children?: ReactNode
} & Omit<ComponentPropsWithoutRef<T>, 'tag'>

export const Wrap = <T extends ElementType = 'span'>({ tag, children, ...props }: WrapProps<T>) => {
  const Tag = tag ?? 'span'
  return (
    <Tag className={props.className} {...props}>
      {children}
    </Tag>
  )
}
