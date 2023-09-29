import styled, { css, keyframes } from "styled-components";
import { ulid } from 'ulid'
import { Button } from "../prototypes/buttons/Button";
import { CircleButton } from "../prototypes/buttons/CircleButton";
import { useRef, useState, memo } from "react";

const rippleEffectDuration = 1200;

const rippleEffect = keyframes`
  from {
      transform: scale(1);
      opacity: 0.45;
  }
  to {
      transform: scale(50);
      opacity: 0;
  }
`

const StyledButton = styled(Button)`
  overflow: hidden;
  position: relative;
`

const StyledCircleButton = styled(CircleButton)`
  overflow: hidden;
  position: relative;
`

const RippleStyled = styled.div`
  position: absolute;
  background-color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  animation: ${rippleEffect} ${rippleEffectDuration}ms 1;
  opacity: 0;
  ${props => {
    return css`
      top:  ${props.rippleCenter.y}px;
      left: ${props.rippleCenter.x}px;
    `
  }}
`

const Ripple = memo((props) => {
  return (
    <RippleStyled rippleCenter={props.rippleCenter} />
  )
})

export const RippleButton = (props) => {
  const rippleButton = useRef(null);
  const [rippleList, setRippleList] = useState([])

  const addRipple = (event) => {
    const key = ulid()
    const now = new Date();
    // Ripples will be deleted from rippleList after their animation ends.
    const inspiredRipple = rippleList.filter((ripple) => {
      return now.getTime() - ripple.timestamp.getTime() <= rippleEffectDuration;
    })
    setRippleList([...inspiredRipple, {
      "center": {
        "x": event.clientX - rippleButton.current.getBoundingClientRect().x,
        "y": event.clientY - rippleButton.current.getBoundingClientRect().y,
      },
      "key": key,
      "timestamp": new Date(),
    }])
  }

  return (
    <StyledButton
      onClick={(event) => {
        addRipple(event)
      }}
      ref={rippleButton}
      fontFamily={props.fontFamily} color={props.color} width={props.width} height={props.height} padding={props.padding} margin={props.margin} filled={props.filled} hoverTypes={props.hoverTypes} outlined={props.outlined} isShadow={props.isShadow}
    >
      {rippleList.map((ripple) => {
        return <Ripple key={ripple.key} rippleCenter={ripple.center} />
      })}
      {props.children}
    </StyledButton>
  )

}

export const CircleRippleButton = (props) => {
  const rippleButton = useRef(null);
  const [rippleList, setRippleList] = useState([])

  const addRipple = (event) => {
    const key = ulid()
    const now = new Date();
    // Ripples will be deleted from rippleList after their animation ends.
    const inspiredRipple = rippleList.filter((ripple) => {
      return now.getTime() - ripple.timestamp.getTime() <= rippleEffectDuration;
    })
    setRippleList([...inspiredRipple, {
      "center": {
        "x": event.clientX - rippleButton.current.getBoundingClientRect().x,
        "y": event.clientY - rippleButton.current.getBoundingClientRect().y,
      },
      "key": key,
      "timestamp": new Date(),
    }])
  }

  return (
    <StyledCircleButton
      onClick={(event) => {
        addRipple(event)
      }}
      ref={rippleButton}
      fontFamily={props.fontFamily} color={props.color} radius={props.radius} padding={props.padding} margin={props.margin} filled={props.filled} hoverTypes={props.hoverTypes} outlined={props.outlined} isShadow={props.isShadow}
    >
      {rippleList.map((ripple) => {
        return <Ripple key={ripple.key} rippleCenter={ripple.center} />
      })}
      {props.children}
    </StyledCircleButton>
  )

}