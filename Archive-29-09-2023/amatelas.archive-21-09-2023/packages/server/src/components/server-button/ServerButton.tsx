import { AmatelasBaseProps } from '../types'
import { ServerFilledButton } from './variant/filled-button/ServerFilledButton'
import { ServerOutlinedButton } from './variant/outlined-button/ServerOutlinedButton'
import { ServerStandardButton } from './variant/standard-button/ServerStandardButton'

type Variant = 'standard' | 'outlined' | 'filled'

interface ServerButtonProps extends AmatelasBaseProps {
  variant?: Variant
}

export const ServerButton = (props: ServerButtonProps) => {
  if (props.variant === 'filled') {
    return <ServerFilledButton>{props.children}</ServerFilledButton>
  } else if (props.variant === 'outlined') {
    return <ServerOutlinedButton>{props.children}</ServerOutlinedButton>
  }
  return <ServerStandardButton>{props.children}</ServerStandardButton>
}
