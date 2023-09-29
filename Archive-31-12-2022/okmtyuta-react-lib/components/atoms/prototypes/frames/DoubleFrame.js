import styled from "styled-components";
import { colors } from "../../../../config";
import { gridRatioArrayToProp } from "../../../../js/utils";

export const DoubleFrame = styled.section`
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1024px;
  color: ${props => props.color || colors.charColor};

  display: grid;
  grid-template-areas:  "doubleFrameLeft doubleFrameRight";
  grid-template-columns: ${props => props.gridRatios ? gridRatioArrayToProp(props.gridRatios) : "3fr 1fr"};
  
  justify-content: center;
  gap: ${props => props.gap || "30px"}
`

export const DoubleFrameLeft = styled.section`
  grid-area: doubleFrameLeft;
  min-width: 0;
`
export const DoubleFrameRight = styled.section`
  grid-area: doubleFrameRight;
  min-width: 0;
`