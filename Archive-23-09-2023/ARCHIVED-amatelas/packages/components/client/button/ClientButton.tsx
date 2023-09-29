import { ClientButtonBaseProps } from './types/ClientButtonBaseProps'
import { FilledButton } from './variant/filled-button/FilledButton'
import { OutlinedButton } from './variant/outlined-button/OutlinedButton'
import { StandardButton } from './variant/standard-button/StandardButton'

type Variant = 'standard' | 'outlined' | 'filled'

interface ClientButtonProps extends ClientButtonBaseProps {
  variant?: Variant
}

export const ClientButton = (props: ClientButtonProps) => {
  if (props.variant === 'filled') {
    return <FilledButton>{props.children}</FilledButton>
  } else if (props.variant === 'outlined') {
    return <OutlinedButton>{props.children}</OutlinedButton>
  }
  return <StandardButton>{props.children}</StandardButton>
}
