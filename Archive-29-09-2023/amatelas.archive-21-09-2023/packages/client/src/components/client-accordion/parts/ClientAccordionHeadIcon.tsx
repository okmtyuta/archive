import { color } from '@amatelas/shared/constant/color/color'
import styled, { css } from 'styled-components'

export const ClientAccordionHeadIcon = styled.span`
  display: block;
  position: relative;
  transition: transform 0.25s;
  fill: ${color.suoh};
  display: flex;
  ${(props) => {
    if (props.theme.isShow) {
      return css`
        transform: rotate(-180deg);
      `
    }
  }}
`
