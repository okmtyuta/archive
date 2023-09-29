/* eslint-disable react-refresh/only-export-components */
import { memo } from 'react'
import styled, { css, keyframes } from 'styled-components'

const rippleEffectDuration = 1200

export interface Ripple {
  center: {
    x: number
    y: number
  }
  key: string
  timestamp: Date
}

export interface RippleProps {
  rippleCenter: {
    x: number
    y: number
  }
}
export const Ripple = memo((props: RippleProps) => {
  return <RippleStyled theme={{ rippleCenter: props.rippleCenter }} />
})

export const createOnClick = (
  buttonRef: React.RefObject<HTMLButtonElement>,
  ripples: Ripple[],
  setRipples: React.Dispatch<React.SetStateAction<Ripple[]>>
) => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const key = crypto.randomUUID()
    const now = new Date()

    if (buttonRef.current) {
      const inspiredRipple = ripples.filter((ripple) => {
        return now.getTime() - ripple.timestamp.getTime() <= 1200
      })
      setRipples([
        ...inspiredRipple,
        {
          center: {
            x: event.clientX - buttonRef.current.getBoundingClientRect().x,
            y: event.clientY - buttonRef.current.getBoundingClientRect().y
          },
          key: key,
          timestamp: new Date()
        }
      ])
    }
  }

  return onClick
}
export const rippleEffect = keyframes`
  from {
      transform: scale(1);
      opacity: 0.45;
  }
  to {
      transform: scale(50);
      opacity: 0;
  }
`

export const RippleStyled = styled.div`
  position: absolute;
  background-color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  animation: ${rippleEffect} ${rippleEffectDuration}ms 1;
  opacity: 0;
  ${(props) => {
    return css`
      top: ${props.theme.rippleCenter.y}px;
      left: ${props.theme.rippleCenter.x}px;
    `
  }}
`
