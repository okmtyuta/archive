import { AmatelasBaseProps } from '../../../types'
import { UnclickableFilledButton } from './variant/filled-button/UnclickableFilledButton'
import { UnclickableOutlinedButton } from './variant/outlined-button/UnclickableOutlinedButton'
import { UnclickableStandardButton } from './variant/standard-button/UnclickableStandardButton'

type Variant = 'standard' | 'outlined' | 'filled'

interface UnclickableButtonProps extends AmatelasBaseProps {
  variant?: Variant
}

export const UnclickableButton = (props: UnclickableButtonProps) => {
  if (props.variant === 'filled') {
    return <UnclickableFilledButton>{props.children}</UnclickableFilledButton>
  } else if (props.variant === 'outlined') {
    return <UnclickableOutlinedButton>{props.children}</UnclickableOutlinedButton>
  }
  return <UnclickableStandardButton pointerEvent="none">{props.children}</UnclickableStandardButton>
}
