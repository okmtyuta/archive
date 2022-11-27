import styled from "styled-components";

import { colors, fontSizing } from "../../../config";

import { Link } from "../../atoms/prototypes/links/Link";
import { List } from "../../atoms/prototypes/lists/List";
import { ListItem } from "../../atoms/prototypes/lists/ListItem";
import { Headline } from "../../atoms/prototypes/headlines/Headline";
import { Wrapper } from "../../atoms/prototypes/wrappers/Wrapper";
import { SingleFrame } from "../../atoms/prototypes/frames/SingleFrame";

export const NostFooterStyled = styled.footer`

`

export const NostFooterMenuSections = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 20px;
`

export const NostFooter = (props) => {
  return (
    <NostFooterStyled>

        {/* バンドですが、Wrapperで作らない方がいいと思います。 */}
        <Wrapper backgroundColor={colors.themeColor} margin="30px 0 30px 0" height="60px">

        </Wrapper>

        <SingleFrame>
          <Wrapper>
            <NostFooterMenuSections>

              <List direction="row" gap="20px">

                <ListItem>

                  <Headline>
                    More Info
                  </Headline>

                  <Wrapper fontSizeType="subBody" padding="4px 0">

                    <List gap="4px">

                      <ListItem>
                        <Link href="#">
                          - Coding Rules
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="#">
                          - Design Policy
                        </Link>
                      </ListItem>

                    </List>

                  </Wrapper>

                </ListItem>

              </List>

            </NostFooterMenuSections>
          </Wrapper>
          
        </SingleFrame>

        <Wrapper fontSizeType="subBody" color={colors.lightCharColor} padding="10px 0" align="center">
        copyright © 2020 - 2022 okmtyuta
        </Wrapper>

      </NostFooterStyled>
  )
}