import styled, { css } from 'styled-components'

interface ClientAccordionOutsideProps {
  theme: {
    isShow: boolean
  }
}

export const ClientAccordionOutside = styled.div<ClientAccordionOutsideProps>`
  position: relative;
  width: 100%;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  background-color: white;
  &:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  ${(props) => {
    if (props.theme.isShow) {
      return css`
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
          rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
        // margin-bottom: 12px;
      `
    }
  }}
  ${(props) => {
    if (!props.theme.isShow) {
      return css`
        &:not(:first-child)::before {
          position: absolute;
          left: 0px;
          top: -1px;
          right: 0px;
          height: 1px;
          content: '';
          opacity: 1;
          background-color: rgba(0, 0, 0, 0.12);
        }
      `
    }
  }} // &:not(:first-child)::before {
  //   position: absolute;
  //   left: 0px;
  //   top: -1px;
  //   right: 0px;
  //   height: 1px;
  //   content: '';
  //   opacity: 1;
  //   background-color: rgba(0, 0, 0, 0.12);
  // }
`
