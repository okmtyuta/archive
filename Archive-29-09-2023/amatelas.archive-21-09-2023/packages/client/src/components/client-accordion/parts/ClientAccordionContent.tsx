import styled, { css } from 'styled-components'

interface ClientAccordionContentProps {
  theme: {
    height: number
    isShow: boolean
  }
}

export const ClientAccordionContent = styled.div<ClientAccordionContentProps>`
  height: 0;
  overflow: hidden;
  background-color: #fff;
  transition: all 0.5s;
  padding: 0 10px;

  ${(props) => {
    if (props.theme.isShow) {
      return css`
        height: ${props.theme.height}px;
        padding: 10px;
      `
    }
  }}
`
