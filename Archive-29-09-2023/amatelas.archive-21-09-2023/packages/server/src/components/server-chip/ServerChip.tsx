import { ReactNode } from 'react'
import { ServerFilledChip } from './variant/server-filled-chip/ServerFilledChip'
import { ServerOutlinedChip } from './variant/server-outlined-chip/ServerOutlinedChip'
import { AmatelasBaseProps } from '../types'

type Variant = 'filled' | 'outlined'

interface ServerChipProps extends AmatelasBaseProps {
  children?: ReactNode
  variant?: Variant
}

export const ServerChip = (props: ServerChipProps) => {
  if (props.variant === 'filled') {
    return <ServerFilledChip>{props.children}</ServerFilledChip>
  }

  return <ServerOutlinedChip>{props.children}</ServerOutlinedChip>
}
