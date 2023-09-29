import { SetClientTextFieldValue } from './types/SetClientTextFieldValue'
import { TextFiledBaseProps } from './types/TextFieldBaseProps'
import { FilledTextField } from './variant'

type Variant = 'outlined' | 'filled' | 'standard'

interface ClientTextFiledProps extends TextFiledBaseProps {
  placeholder: string
  variant?: Variant
  setClientTextFieldValue?: SetClientTextFieldValue
}

// const defaultVariant = (variant?: Variant): Variant => {
//   return variant ?? 'outlined'
// }

export const ClientTextField = (props: ClientTextFiledProps) => {
  // const variant = defaultVariant(props.variant)
  // if (variant === 'filled') {
  //   return <FilledTextField className={props.className} placeholder={props.placeholder} />
  // } else if (variant === 'standard') {
  //   return <StandardTextField className={props.className} placeholder={props.placeholder} />
  // }

  return (
    <FilledTextField
      setClientTextFieldValue={props.setClientTextFieldValue}
      name={props.name}
      className={props.className}
      placeholder={props.placeholder}
    />
  )
}
