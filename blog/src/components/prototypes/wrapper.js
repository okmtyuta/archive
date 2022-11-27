import styled, { css } from "styled-components";
import { fontFamilies, colors, fontSizing, deleteOn } from "../../config";
import { toArray } from "../../js";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || "column"};
  font-size: ${props => fontSizing(props.fontSizeType || "body")};
  font-weight: ${props => props.fontWeight || "400"};
  justify-content: ${props => {
      return props.justify || "center";
    }};
  align-items: ${props => {
      return props.align || "flex-start";
  }};

  ${props => {
    if (props.isFollow) {
      return css`
        position: -webkit-sticky;
        position: sticky;
        top: 0;
      `
    }
  }}

  padding: ${props => props.padding || "0"};
  margin: ${props => props.margin || "0"};
  width: ${props => props.width || "auto"};
  height: ${props => props.height || "auto"};
  outline: ${props => props.outline || "none"};
  border: ${props => props.border || "none"};

  ${props => {
    return fontSizing(props.fontSizeType || "body")
  }}
  color: ${props => props.color || colors.charColor};
  font-family: ${props => props.fontFamily || fontFamilies.sansSerif};

  ${props => {
    if (props.deleteOn) {
      return deleteOn(...toArray(props.deleteOn))
    }
  }}

  ${props => {
    if (props.isActive) {
      return css`
        color: ${colors.themeColor};
      `
    }
  }}
`

export const WrapperLink = styled.a`
  border: black 1px solid;
  display: flex;
  justify-content: ${props => {
      return props.justify || "center";
    }};
  align-items: ${props => {
      return props.align || "center";
  }};

  padding: ${props => props.padding || "0"};
  margin: ${props => props.margin || "0"};
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "auto"};

  ${props => {
    return fontSizing(props.fontSizeType || "body")
  }}
  color: ${props => props.color || colors.charColor};
  font-family: ${props => props.fontFamily || fontFamilies.sansSerif};
`