import styled, { css } from "styled-components";
import { colors } from "../../../../config";

export const RouterLinkWrapper = styled.span`
  > a {
    font-family: ${props => props.fontFamily || "inherit"};
    color: ${(props) => props.color || "inherit"};
    text-decoration: ${(props) => props.textDecoration || "none"};
    transition: ${(props) => props.transition || "all .3s"};

    &:hover {
      color: ${props => props.hoveredColor || colors.themeColor}
    }

    ${props => {
      if (props.animation === "underlineFromLeft") {
        return css`
          text-decoration: none;
          position: relative;
          display: inline-block;
          &::after {
            position: absolute;
            bottom: 0;
            left: 0;
            content: '';
            width: 100%;
            height: 2px;
            background: ${props => props.hoveredColor || colors.themeColor};
            transform: scale(0, 1);
            transform-origin: left top;
            transition: transform .3s;
          }
          &:hover {
            color: ${props => props.hoveredColor || colors.themeColor}
            transition: color .3s;
          }
          &:hover::after {
            transform: scale(1, 1);
          }
          `
        }
    }}
    }
`