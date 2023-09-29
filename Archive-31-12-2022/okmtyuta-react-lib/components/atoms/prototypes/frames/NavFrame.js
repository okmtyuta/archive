import styled, { css } from "styled-components";
import { colors, mq, deleteOn } from "../../../../config";
import { gridRatioArrayToProp, toArray } from "../../../../js/utils";

export const NavFrame = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1024px;
  color: ${props => props.color || colors.charColor};
  justify-content: center;
  gap: ${props => props.gap || "30px"};

  ${props => {
    if (props.onlyLeftOn) {
      if ("pc" in props.onlyLeftOn === false) {
        return mq.pc`
          display: grid;
          grid-template-areas:  "navFrameMain navFrameNav";
          grid-template-columns: ${props => props.gridRatios ? gridRatioArrayToProp(props.gridRatios) : "3fr 1fr"};
        `
      }
      if ("tab" in props.onlyLeftOn === false) {
        return mq.tab`
          display: grid;
          grid-template-areas:  "navFrameMain navFrameNav";
          grid-template-columns: ${props => props.gridRatios ? gridRatioArrayToProp(props.gridRatios) : "3fr 1fr"};
        `
      }
      if ("sp" in props.onlyLeftOn === false) {
        return mq.sp`
          display: grid;
          grid-template-areas:  "navFrameMain navFrameNav";
          grid-template-columns: ${props => props.gridRatios ? gridRatioArrayToProp(props.gridRatios) : "3fr 1fr"};
        `
      } 
    } else {
      return css`
        display: grid;
        grid-template-areas:  "navFrameMain navFrameNav";
        grid-template-columns: ${props => props.gridRatios ? gridRatioArrayToProp(props.gridRatios) : "3fr 1fr"};
      `
    }
  }}

  > nav {
    ${props => {
      if (props.onlyLeftOn) {
        return deleteOn(...toArray(props.onlyLeftOn))
      }
    }}
  }
`

export const NavFrameNav = styled.nav`
  grid-area: navFrameNav;
  min-width: 0;
`

export const NavFrameMain = styled.div`
  grid-area: navFrameMain;
  min-width: 0;
`