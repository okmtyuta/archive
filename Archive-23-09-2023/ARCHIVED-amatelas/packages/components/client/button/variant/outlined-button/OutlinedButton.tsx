import styled from 'styled-components'
import { useRef, useState, ReactNode } from 'react'
import { color } from '../../../../../frontend-utils/src'
import { Ripple, createOnClick } from '../shared/ripple'
import { BaseClientButton } from '../shared/BaseClientButton'
import { ClientButtonBaseProps } from '../../types/ClientButtonBaseProps'

const StyledOutlinedButton = styled(BaseClientButton)`
  background-color: inherit;
  border: ${color.suoh} solid 1px;
  color: ${color.suoh};
`

interface OutlinedButtonProps extends ClientButtonBaseProps {
  children: ReactNode
}

export const OutlinedButton = (props: OutlinedButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [ripples, setRipples] = useState<Ripple[]>([])

  return (
    <StyledOutlinedButton onClick={createOnClick(buttonRef, ripples, setRipples)} ref={buttonRef}>
      {ripples.map((ripple: Ripple) => {
        return <Ripple key={ripple.key} rippleCenter={ripple.center} />
      })}
      {props.children}
    </StyledOutlinedButton>
  )
}
