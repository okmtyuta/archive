import styled from 'styled-components'
import { useRef, useState } from 'react'
import { color } from '../../../../../frontend-utils/src'
import { Ripple, createOnClick } from '../shared/ripple'
import { BaseClientButton } from '../shared/BaseClientButton'
import { ClientButtonBaseProps } from '../../types/ClientButtonBaseProps'

const StyledFilledButton = styled(BaseClientButton)`
  border: none;
  color: ${color.suoh};
  background-color: ${color.suoh}1f;
`

interface FilledButtonProps extends ClientButtonBaseProps {}

export const FilledButton = (props: FilledButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [ripples, setRipples] = useState<Ripple[]>([])

  return (
    <StyledFilledButton onClick={createOnClick(buttonRef, ripples, setRipples)} ref={buttonRef}>
      {ripples.map((ripple: Ripple) => {
        return <Ripple key={ripple.key} rippleCenter={ripple.center} />
      })}
      {props.children}
    </StyledFilledButton>
  )
}
