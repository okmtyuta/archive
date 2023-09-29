import styled from 'styled-components'
import { useRef, useState } from 'react'
import { Ripple, createOnClick } from '../shared/ripple'
import { BaseClientButton } from '../shared/BaseClientButton'
import { ClientButtonBaseProps } from '../../types/ClientButtonBaseProps'
import { color } from '@amatelas/shared/constant/color/color'

const StyledClientFilledButton = styled(BaseClientButton)`
  border: none;
  color: ${color.suoh};
  background-color: ${color.suoh}1f;
`

interface ClientFilledButtonProps extends ClientButtonBaseProps {}

export const ClientFilledButton = (props: ClientFilledButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [ripples, setRipples] = useState<Ripple[]>([])

  return (
    <StyledClientFilledButton onClick={createOnClick(buttonRef, ripples, setRipples)} ref={buttonRef}>
      {ripples.map((ripple: Ripple) => {
        return <Ripple key={ripple.key} rippleCenter={ripple.center} />
      })}
      {props.children}
    </StyledClientFilledButton>
  )
}
