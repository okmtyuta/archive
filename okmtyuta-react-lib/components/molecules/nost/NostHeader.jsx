import styled from "styled-components";

import { mq, colors, fontSizing, fontFamilies } from "../../../config";
import { Link } from "../../atoms/prototypes/links/Link";
import { RouterLinkWrapper } from "../../atoms/prototypes/wrappers/RouterLinkWrapper";
import { Link as RouterLink } from "react-router-dom";

import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CodeIcon from '@mui/icons-material/Code';
import ArticleIcon from '@mui/icons-material/Article';
import GestureIcon from '@mui/icons-material/Gesture';

export const NostHeaderStyled = styled.header`
  font-family: ${fontFamilies.sansSerif};
  ${mq.pc`
    display: grid;
    grid-template: 
      "header-logo header-logo"   1fr
      "header-menu header-utils" 1fr /
      6fr         2fr
    ;
    grid-area: header;
    font: ${fontSizing("body")};
  `}
  ${mq.tab`
    display: grid;
    grid-template: 
      "header-logo header-utils"  1fr
      "header-menu header-menu"   1fr/
      6fr         4fr  
    ;
    grid-area: header;
    font: ${fontSizing("body")};
  `}
  ${mq.sp`
    display: grid;
    grid-template: 
      "header-logo header-utils"  1fr
      "header-menu header-menu"   1fr/
      6fr         6fr  
    ;
    grid-area: header;
    font: ${fontSizing("body")};
  `}
`

export const NostHeaderLogo = styled.div`
  font-family: ${fontFamilies.anton};
  ${mq.pc`
    color: ${colors.themeColor};
    display: grid;
    justify-content: center;
    align-content: center;
    grid-area: header-logo;
    font-size: 20px;
  `}
  ${mq.tab`
    color: ${colors.themeColor};
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: header-logo;
    font-size: 20px;
  `}
  ${mq.sp`
    color: ${colors.themeColor};
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: header-logo;
    font-size: 16px;
  `}
`

export const NostHeaderUtils = styled.ul`
  grid-area: header-utils;
    list-style: none;
    display: grid;
    grid-auto-flow: column;
    a {
      text-decoration: none;
      color: inherit;
      position: relative;
      display: inline-block;
      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: '';
        width: 100%;
        height: 2px;
        background: ${colors.themeColor};
        transform: scale(0, 1);
        transform-origin: center top;
        transition: transform .3s;
      }
      &:hover {
        color: ${colors.themeColor};
        transition: color .3s;
      }
      &:hover::after {
        transform: scale(1, 1);
      }
    }
  ${'' /* ${mq.pc`
    grid-area: header-utils;
    list-style: none;
    display: grid;
    grid-auto-flow: column;
    a {
      text-decoration: none;
      color: inherit;
      position: relative;
      display: inline-block;
      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: '';
        width: 100%;
        height: 2px;
        background: ${colors.themeColor};
        transform: scale(0, 1);
        transform-origin: center top;
        transition: transform .3s;
      }
      &:hover {
        color: ${colors.themeColor};
        transition: color .3s;
      }
      &:hover::after {
        transform: scale(1, 1);
      }
    }
  `}
  ${mq.tab`
    grid-area: header-utils;
    list-style: none;
    display: grid;
    grid-auto-flow: column;
  `}
  ${mq.sp`
    grid-area: header-utils;
    list-style: none;
    display: grid;
    grid-auto-flow: column;
  `} */}
`

export const NostHeaderMenu = styled.ul`
  grid-area: header-menu;
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  a {
    text-decoration: none;
    color: inherit;
    position: relative;
    display: inline-block;
    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      content: '';
      width: 100%;
      height: 2px;
      background: ${colors.themeColor};
      transform: scale(0, 1);
      transform-origin: center top;
      transition: transform .3s;
    }
    &:hover {
      color: ${colors.themeColor};
      transition: color .3s;
    }
    &:hover::after {
      transform: scale(1, 1);
    }
  }
  ${'' /* ${mq.pc`
    grid-area: header-menu;
    color: ${colors.charColor};
  `}
  ${mq.tab`
    grid-area: header-menu;
    color: ${colors.charColor};
  `}
  ${mq.sp`
    grid-area: header-menu;
    color: ${colors.charColor};
  `} */}
`

export const NostHeaderMenuItem = styled.li`
  ${mq.pc`
    justify-content: center;
    font: ${fontSizing("subBody")};

    display: grid;
    grid-auto-flow: column;
    align-items: center;
    grid-gap: 5px;
    height: 100%;
  `}
  ${mq.tab`
    justify-content: center;
    font: ${fontSizing("subBody")};

    display: grid;
    grid-auto-flow: column;
    align-items: center;
    grid-gap: 5px;
    height: 100%;
  `}
  ${mq.sp`
    justify-content: center;
    font: ${fontSizing("subBody")};

    display: grid;
    grid-auto-flow: column;
    align-items: center;
    grid-gap: 5px;
    height: 100%;
  `}
`

export const NostHeader = (props) => {
  return (
    <NostHeaderStyled>
    
      <NostHeaderLogo>
        <RouterLinkWrapper>
          <RouterLink to="/">
            okmtyuta ENGINEER BLOG
          </RouterLink>
        </RouterLinkWrapper>
      </NostHeaderLogo>

    <NostHeaderUtils>
      <Link href="#">
        <NostHeaderMenuItem>
          <SearchIcon />
          <div>
            Search
          </div>
        </NostHeaderMenuItem>
      </Link>

      <Link href="#">
        <NostHeaderMenuItem>
          <PermIdentityIcon />
          <div>
            Log In
          </div>
        </NostHeaderMenuItem>
      </Link>
    </NostHeaderUtils>

  <NostHeaderMenu>

    <Link href="#">
      <NostHeaderMenuItem>
        <CodeIcon />
        <div>
          Code
        </div>
      </NostHeaderMenuItem>
    </Link>

    <RouterLink to="/article/list">
      <NostHeaderMenuItem>
        <ArticleIcon />
        <div>
          Article
        </div>
      </NostHeaderMenuItem>
    </RouterLink>

    <Link href="#">
      <NostHeaderMenuItem>
        <GestureIcon />
        <div>
          Illust
        </div>
      </NostHeaderMenuItem>
    </Link>

  </NostHeaderMenu>

    </NostHeaderStyled>
  )
}