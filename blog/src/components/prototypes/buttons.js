import styled, { css } from "styled-components";
import { colors, fontFamilies, fontSizing } from "../../config";
import { lighten, equalOrContain } from "../../js/utils";

export const Button = styled.div`
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  font-family: ${props => props.fontFamily || fontFamilies.sansSerif};

  color: ${(props) => {
    if (props.filled) {
      return "white";
    } else {
      return props.color || colors.charColor;
    }
  }};

  background-color: ${(props) => {
    if (props.filled) {
      return props.color || colors.charColor;
    } else {
      return "inherit";
    }
  }};

  width: ${props => props.width || "100%"};
  padding: ${props => props.padding || "10px"};
  
  margin: ${(props) => {
    if (props.margin && props.centered) {
      return css`${props.margin} auto;`
    } else if (!props.margin && props.centered) {
      return css`0 auto;`
    } else {
      return css`${props.margin || "0px"}`
    }
  }};
  
  ${(props) => {
    if (props.outlined) {
      return css`border: 1px solid ${props => props.color || colors.charColor};`
    }
  }};

  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transition: all .4s;
  cursor: pointer;

  ${fontSizing("button")}

  &:hover {
    background-color: ${(props) => {
      if (props.filled &&  equalOrContain(props.hoverTypes, "highlight")) {
        return props.color ? lighten(props.color) : lighten(colors.charColor);
      } else if (props.filled && !equalOrContain(props.hoverTypes, "highlight")) {
        return props.color || colors.charColor;
      } else {
        return props.color || colors.charColor;
      }
    }};
    ${(props) => {
      if (equalOrContain(props.hoverTypes, "highlight") && props.outlined) {
        return css`border: 1px solid ${props.color ? lighten(props.color) : lighten(colors.charColor)}`;
      } 
      else if (!equalOrContain(props.hoverTypes, "highlight") && props.outlined){
        return css`border: 1px solid ${props.color || colors.charColor}`;
      }
    }};
    ${(props) => {
      if (equalOrContain(props.hoverTypes, "shadow")) {
        return css`box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px`;
      }
    }};
  };

  ${props => {
    if (props.isShadow) {
      return css`
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      `
    }
  }}
`



export const CircleButton = styled.div`
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  font-family: ${props => props.fontFamily || fontFamilies.sansSerif};

  color: ${(props) => {
    if (props.filled) {
      return "white";
    } else {
      return props.color || colors.charColor;
    }
  }};

  background-color: ${(props) => {
    if (props.filled) {
      return props.color || colors.charColor;
    } else {
      return "inherit";
    }
  }};

  width: ${props => props.radius * 2 || "50px"};
  height: ${props => props.radius * 2 || "50px"};
  border-radius: 50%;

  padding: ${props => props.padding || "10px"};
  
  margin: ${(props) => {
    if (props.margin && props.centered) {
      return css`${props.margin} auto;`
    } else if (!props.margin && props.centered) {
      return css`0 auto;`
    } else {
      return css`${props.margin || "0px"}`
    }
  }};
  
  ${(props) => {
    if (props.outlined) {
      return css`border: 1px solid ${props => props.color || colors.charColor};`
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transition: all .4s;
  cursor: pointer;

  ${fontSizing("button")}

  &:hover {
    background-color: ${(props) => {
      if (props.filled &&  equalOrContain(props.hoverTypes, "highlight")) {
        return props.color ? lighten(props.color) : lighten(colors.charColor);
      } else if (props.filled && !equalOrContain(props.hoverTypes, "highlight")) {
        return props.color || colors.charColor;
      } 
    }};
    ${(props) => {
      if (equalOrContain(props.hoverTypes, "highlight") && props.outlined) {
        return css`border: 1px solid ${props.color ? lighten(props.color) : lighten(colors.charColor)}`;
      } 
      else if (!equalOrContain(props.hoverTypes, "highlight") && props.outlined){
        return css`border: 1px solid ${props.color || colors.charColor}`;
      }
    }};
    ${(props) => {
      if (equalOrContain(props.hoverTypes, "shadow")) {
        return css`box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px`;
      }
    }};
  };

  ${props => {
    if (props.isShadow) {
      return css`
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      `
    }
  }}
`