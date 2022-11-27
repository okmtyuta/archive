import styled from "styled-components";
import { StylingInterface } from "./interface";

export interface STextFieldProps extends StylingInterface {
  width?: string;
  height?: string;
}

export const STextField = styled.input<STextFieldProps>`
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 7px;
  border: none;
  &:focus {
    outline: none;
  }
  width: ${(props) => props.width || "100%"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
`;
