// Refer to https://mui.com/material-ui/react-drawer/

import { ReactNode } from 'react'
import { BottomDrawer } from './variant/bottom-drawer/BottomDrawer'
import { LeftDrawer } from './variant/left-drawer/LeftDrawer'
import { RightDrawer } from './variant/right-drawer/RightDrawer'
import { TopDrawer } from './variant/top-drawer/TopDrawer'
import { AmatelasBaseProps } from '../../types/AmatelasBaseProps'

type Variant = 'left' | 'top' | 'right' | 'bottom'

interface DrawerProps extends AmatelasBaseProps {
  variant?: Variant
  label: ReactNode
}

export const Drawer = (props: DrawerProps) => {
  if (props.variant === 'top') {
    return <TopDrawer label={props.label}>{props.children}</TopDrawer>
  } else if (props.variant === 'right') {
    return <RightDrawer label={props.label}>{props.children}</RightDrawer>
  } else if (props.variant === 'bottom') {
    return <BottomDrawer label={props.label}>{props.children}</BottomDrawer>
  }

  return <LeftDrawer label={props.label}>{props.children}</LeftDrawer>
}
