import styled, { css } from "styled-components";
import { FlexJustifyTypes } from "./config/types";
import { StylingInterface } from "./interface";

interface SListProps extends StylingInterface {
  direction?: string;
  gap?: string;
  justify?: FlexJustifyTypes;
}

export const SList = styled.ul<SListProps>`
  margin-block-start: 0em;
  margin-block-end: 0em;
  padding-inline-start: 0px;
  list-style: none;

  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  color: ${(props) => props.color || "inherit"};
  font-size: ${(props) => props.fontSize || "16px"};

  ${(props) => {
    const justify = props.justify;
    if (props.direction === "row") {
      return css`
        display: flex;
        flex-direction: row;
        justify-content: ${justify || "flex-start"};
      `;
    } else {
      return css`
        display: flex;
        flex-direction: column;
      `;
    }
  }};

  gap: ${(props) => props.gap || "0"};
`;
