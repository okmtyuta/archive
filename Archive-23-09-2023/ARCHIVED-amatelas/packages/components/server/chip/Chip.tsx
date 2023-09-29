import { ReactNode } from 'react'
import { AmatelasBaseProps } from '../../types'
import { FilledChip } from './variant/filled-chip/FilledChip'
import { OutlinedChip } from './variant/outlined-chip/OutlinedChip'

type Variant = 'filled' | 'outlined'

interface ChipProps extends AmatelasBaseProps {
  children?: ReactNode
  variant?: Variant
}

export const Chip = (props: ChipProps) => {
  if (props.variant === 'filled') {
    return <FilledChip>{props.children}</FilledChip>
  }

  return <OutlinedChip>{props.children}</OutlinedChip>
}
