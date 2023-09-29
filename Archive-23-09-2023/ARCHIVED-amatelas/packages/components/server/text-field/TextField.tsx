import { TextFiledBaseProps } from './types/TextFieldBaseProps'
import { FilledTextField, OutlinedTextField, StandardTextField } from './variant'

type Variant = 'outlined' | 'filled' | 'standard'

interface TextFiledProps extends TextFiledBaseProps {
  placeholder: string
  variant?: Variant
}

const defaultVariant = (variant?: Variant): Variant => {
  return variant ?? 'outlined'
}

export const TextField = (props: TextFiledProps) => {
  const variant = defaultVariant(props.variant)
  if (variant === 'filled') {
    return <FilledTextField name={props.name} className={props.className} placeholder={props.placeholder} />
  } else if (variant === 'standard') {
    return <StandardTextField name={props.name} className={props.className} placeholder={props.placeholder} />
  }

  return <OutlinedTextField name={props.name} className={props.className} placeholder={props.placeholder} />
}
