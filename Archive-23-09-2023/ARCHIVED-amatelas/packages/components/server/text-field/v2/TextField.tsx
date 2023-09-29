import { TextFiledBaseProps } from './types/TextFieldBaseProps'
import { FilledTextField, OutlinedTextField, StandardTextField } from './variant'

type Variant = 'outlined' | 'filled' | 'standard'

interface TextFiledProps extends TextFiledBaseProps {
  placeholder: string
  variant?: Variant
}

export const V2TextField = (props: TextFiledProps) => {
  if (props.variant === 'filled') {
    return <FilledTextField name={props.name} className={props.className} placeholder={props.placeholder} />
  } else if (props.variant === 'standard') {
    return <StandardTextField name={props.name} className={props.className} placeholder={props.placeholder} />
  }

  return <OutlinedTextField name={props.name} className={props.className} placeholder={props.placeholder} />
}
