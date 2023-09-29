import { AmatelasBaseProps } from '../../types'
import { FilledButton } from './variant/filled-button/FilledButton'
import { OutlinedButton } from './variant/outlined-button/OutlinedButton'
import { StandardButton } from './variant/standard-button/StandardButton'

type Variant = 'standard' | 'outlined' | 'filled'

interface ButtonProps extends AmatelasBaseProps {
  variant?: Variant
}

export const Button = (props: ButtonProps) => {
  if (props.variant === 'filled') {
    return <FilledButton>{props.children}</FilledButton>
  } else if (props.variant === 'outlined') {
    return <OutlinedButton>{props.children}</OutlinedButton>
  }
  return <StandardButton pointerEvent="none">{props.children}</StandardButton>
}
