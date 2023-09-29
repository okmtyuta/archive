import styled from 'styled-components'
import { useRef, useState } from 'react'
import { color } from '../../../../../frontend-utils/src'
import { Ripple, createOnClick } from '../shared/ripple'
import { BaseClientButton } from '../shared/BaseClientButton'
import { ClientButtonBaseProps } from '../../types/ClientButtonBaseProps'

const StyledStandardButton = styled(BaseClientButton)`
  border: none;
  background-color: inherit;
  color: ${color.suoh};
`

interface StandardButtonProps extends ClientButtonBaseProps {}

export const StandardButton = (props: StandardButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [ripples, setRipples] = useState<Ripple[]>([])

  return (
    <StyledStandardButton onClick={createOnClick(buttonRef, ripples, setRipples)} ref={buttonRef}>
      {ripples.map((ripple: Ripple) => {
        return <Ripple key={ripple.key} rippleCenter={ripple.center} />
      })}
      {props.children}
    </StyledStandardButton>
  )
}
