import styled, { css } from "styled-components";
import IStyled from "../IStyled";

export interface SButtonProps extends IStyled {
  isActive?: boolean;
  hoveredColor?: string;
  hoveredBackgroundColor?: string;
  isHovering?: boolean;
}

export const SButton = styled.button<SButtonProps>`
  cursor: pointer;
  outline: ${(props) => props.outline || "none"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  color: ${(props) => props.color || "inherit"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  font-family: ${(props) => props.fontFamily || "inherit"};
  font-size: ${(props) => props.fontSize || "inherit"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderRadius || "0"};
  transition: ${(props) => props.transition || "none"};
  box-sizing: border-box;
  appearance: none;

  cursor: ${(props) => (props.isActive ? "pointer" : "initial")};

  ${(props) => {
    if (props.isHovering) {
      return css`
        &:hover {
          background-color: ${props.hoveredBackgroundColor ||
          props.backgroundColor ||
          "transparent"};
          color: ${props.hoveredColor || props.color || "inherit"};
        }
      `;
    }
  }}
`;
