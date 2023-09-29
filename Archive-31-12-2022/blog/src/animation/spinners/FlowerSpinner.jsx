import styled, { keyframes } from "styled-components";
import { colors } from "../../config";

const flowerSpinnerBiggerDotAnimation = keyframes`
  0%, 100% {
    box-shadow: ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px;
  }

  50% {
    transform: rotate(180deg);
  }

  25%, 75% {
    box-shadow: ${colors.themeColor} 26px 0px 0px,
    ${colors.themeColor} -26px 0px 0px,
    ${colors.themeColor} 0px 26px 0px,
    ${colors.themeColor} 0px -26px 0px,
    ${colors.themeColor} 19px -19px 0px,
    ${colors.themeColor} 19px 19px 0px,
    ${colors.themeColor} -19px -19px 0px,
    ${colors.themeColor} -19px 19px 0px;
  }

  100% {
    transform: rotate(360deg);
    box-shadow: ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px;
  }
`

const flowerSpinnerSmallerDotAnimation = keyframes`
  0%, 100% {
    box-shadow: ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px;
  }

  25%, 75% {
    box-shadow: ${colors.themeColor} 14px 0px 0px,
    ${colors.themeColor} -14px 0px 0px,
    ${colors.themeColor} 0px 14px 0px,
    ${colors.themeColor} 0px -14px 0px,
    ${colors.themeColor} 10px -10px 0px,
    ${colors.themeColor} 10px 10px 0px,
    ${colors.themeColor} -10px -10px 0px,
    ${colors.themeColor} -10px 10px 0px;
  }

  100% {
    box-shadow: ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px,
    ${colors.themeColor} 0px 0px 0px;
  }
`

const FlowerSpinnerWrapper = styled.div`
  height: 70px;
  width: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const DotsContainer = styled.div`
  height: calc(70px / 7);
  width: calc(70px / 7);
`

const SmallerDot = styled.div`
  background: ${colors.themeColor};
  height: 100%;
  width: 100%;
  border-radius: 50%;
  animation: ${flowerSpinnerSmallerDotAnimation} 2.5s 0s infinite both;
`

const BiggerDot = styled.div`
  background: ${colors.themeColor};
  height: 100%;
  width: 100%;
  padding: 10%;
  border-radius: 50%;
  animation: ${flowerSpinnerBiggerDotAnimation} 2.5s 0s infinite both;
`

export const FlowerSpinner = () => {
  return (
      <FlowerSpinnerWrapper>
        <DotsContainer>
          <BiggerDot>
            <SmallerDot />
          </BiggerDot>
        </DotsContainer>
      </FlowerSpinnerWrapper>
  )
}