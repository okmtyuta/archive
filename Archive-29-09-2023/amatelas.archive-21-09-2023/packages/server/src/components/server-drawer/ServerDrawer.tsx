import { ReactNode } from 'react'

import { ServerBottomDrawer } from './variant/server-bottom-drawer/ServerBottomDrawer'
import { ServerLeftDrawer } from './variant/server-left-drawer/ServerLeftDrawer'
import { ServerRightDrawer } from './variant/server-right-drawer/RightDrawer'
import { ServerTopDrawer } from './variant/server-top-drawer/TopDrawer'
import { AmatelasBaseProps } from '../types'

type Variant = 'left' | 'top' | 'right' | 'bottom'

interface ServerDrawerProps extends AmatelasBaseProps {
  variant?: Variant
  label: ReactNode
}

export const ServerDrawer = (props: ServerDrawerProps) => {
  if (props.variant === 'top') {
    return <ServerTopDrawer label={props.label}>{props.children}</ServerTopDrawer>
  } else if (props.variant === 'right') {
    return <ServerRightDrawer label={props.label}>{props.children}</ServerRightDrawer>
  } else if (props.variant === 'bottom') {
    return <ServerBottomDrawer label={props.label}>{props.children}</ServerBottomDrawer>
  }

  return <ServerLeftDrawer label={props.label}>{props.children}</ServerLeftDrawer>
}
