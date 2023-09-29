import styled, { keyframes } from "styled-components";
import { colors } from "../../config";

const OrbitSpinnerOrbitOneAnimation = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
`
const OrbitSpinnerOrbitTwoAnimation = keyframes`
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
`
const OrbitSpinnerOrbitThreeAnimation = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
`

const OrbitSpinnerWrapper = styled.div`
  height: 55px;
  width: 55px;
  border-radius: 50%;
  perspective: 800px;
`

const Orbit = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  :nth-child(1) {
    left: 0%;
    top: 0%;
    animation: ${OrbitSpinnerOrbitOneAnimation} 1200ms linear infinite;
    border-bottom: 3px solid ${colors.themeColor};
  }
  :nth-child(2) {
    right: 0%;
    top: 0%;
    animation: ${OrbitSpinnerOrbitTwoAnimation} 1200ms linear infinite;
    border-right: 3px solid ${colors.secondThemeColor};
  }
  :nth-child(3) {
    right: 0%;
    bottom: 0%;
    animation: ${OrbitSpinnerOrbitThreeAnimation} 1200ms linear infinite;
    border-top: 3px solid ${colors.thirdThemeColor};
  }
`

export const OrbitSpinner = () => {
  return (
    <OrbitSpinnerWrapper>
      <Orbit />
      <Orbit />
      <Orbit />
    </OrbitSpinnerWrapper>
  )
}