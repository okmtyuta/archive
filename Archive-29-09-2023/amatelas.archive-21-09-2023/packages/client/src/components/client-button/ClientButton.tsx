import { ClientButtonBaseProps } from './types/ClientButtonBaseProps'
import { ClientFilledButton } from './variant/client-filled-button/ClientFilledButton'
import { ClientOutlinedButton } from './variant/client-outlined-button/ClientOutlinedButton'
import { ClientStandardButton } from './variant/client-standard-button/ClientStandardButton'

type Variant = 'standard' | 'outlined' | 'filled'

interface ClientButtonProps extends ClientButtonBaseProps {
  variant?: Variant
}

export const ClientButton = (props: ClientButtonProps) => {
  if (props.variant === 'filled') {
    return <ClientFilledButton>{props.children}</ClientFilledButton>
  } else if (props.variant === 'outlined') {
    return <ClientOutlinedButton>{props.children}</ClientOutlinedButton>
  }
  return <ClientStandardButton>{props.children}</ClientStandardButton>
}
