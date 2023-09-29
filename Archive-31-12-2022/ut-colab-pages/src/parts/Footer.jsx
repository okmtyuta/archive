import { NostFooter, NostFooterMenuSections } from "../okmtyuta-react-lib/components/nost/NostFooter";
import { Link, List, ListItem, Headline, Wrapper, Article, SingleFrame, Paragraph } from "../okmtyuta-react-lib/components";
import { colors, fontSizing } from "../okmtyuta-react-lib/config";

export const Footer = (props) => {
  return (
    <NostFooter>

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
      </NostFooter>
  )
}