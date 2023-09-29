import styled from 'styled-components'
import { useRef, useState } from 'react'
import { Ripple, createOnClick } from '../shared/ripple'
import { BaseClientButton } from '../shared/BaseClientButton'
import { ClientButtonBaseProps } from '../../types/ClientButtonBaseProps'
import { color } from '@amatelas/shared/constant/color/color'

const StyledClientStandardButton = styled(BaseClientButton)`
  border: none;
  background-color: inherit;
  color: ${color.suoh};
`

interface ClientStandardButtonProps extends ClientButtonBaseProps {}

export const ClientStandardButton = (props: ClientStandardButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [ripples, setRipples] = useState<Ripple[]>([])

  return (
    <StyledClientStandardButton onClick={createOnClick(buttonRef, ripples, setRipples)} ref={buttonRef}>
      {ripples.map((ripple: Ripple) => {
        return <Ripple key={ripple.key} rippleCenter={ripple.center} />
      })}
      {props.children}
    </StyledClientStandardButton>
  )
}
