import styled from 'styled-components'
import { useRef, useState, ReactNode } from 'react'

import { Ripple, createOnClick } from '../shared/ripple'
import { BaseClientButton } from '../shared/BaseClientButton'
import { ClientButtonBaseProps } from '../../types/ClientButtonBaseProps'
import { color } from '@amatelas/shared/constant/color/color'

const StyledClientOutlinedButton = styled(BaseClientButton)`
  background-color: inherit;
  border: ${color.suoh} solid 1px;
  color: ${color.suoh};
`

interface ClientOutlinedButtonProps extends ClientButtonBaseProps {
  children: ReactNode
}

export const ClientOutlinedButton = (props: ClientOutlinedButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [ripples, setRipples] = useState<Ripple[]>([])

  return (
    <StyledClientOutlinedButton onClick={createOnClick(buttonRef, ripples, setRipples)} ref={buttonRef}>
      {ripples.map((ripple: Ripple) => {
        return <Ripple key={ripple.key} rippleCenter={ripple.center} />
      })}
      {props.children}
    </StyledClientOutlinedButton>
  )
}
