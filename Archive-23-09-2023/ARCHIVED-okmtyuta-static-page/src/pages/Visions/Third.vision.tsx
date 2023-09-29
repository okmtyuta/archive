import styled from "styled-components";
import { SContainer, SFlexContainer } from "../../components/styled/container";
import { SLink, SParagraph } from "../../components/styled/document";
import { SList, SListItem } from "../../components/styled/list";
import colors from "../../config/colors";
import fonts from "../../config/fonts";

const ThirdVisionStyled = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
`;

export const ThirdVision = () => {
  return (
    <ThirdVisionStyled>
      <SFlexContainer justify="center">
        <SContainer
          color={colors.themeColor}
          fontSizeType="h2"
          fontFamily={fonts.fontFamilies.anton}
          padding="20px"
        >
          GrandeVue
        </SContainer>
      </SFlexContainer>

      <SContainer padding="6px 50px">
        <SParagraph padding="4px 0" textAlign="justify">
          皆さんこんにちは！okamotoyoutaと申します！現在大学1年生です。私はイラストを描くのが好きなので，イラストを投稿するために，またプログラミングを勉強するためにWebサイトの作成を開始してみました！まだイラストは投稿していませんが，今後はイラストも投稿していけたらなと思います！
        </SParagraph>

        <SParagraph padding="4px 0" textAlign="justify">
          他にもHTMLやCSSの情報も掲載できたらいいなと思っています。まだ全然初心者ですが，アウトプット目的で続けられたらいいなと思います。
        </SParagraph>

        <SParagraph padding="4px 0" textAlign="justify">
          Twitterもやっているので是非フォローしてください！リンクは
          <SLink href="https://twitter.com/okmtyuta">こちら</SLink>です。
        </SParagraph>

        <SContainer padding="6px" border={`${colors.themeColor} 1px solid`}>
          <div>更新履歴</div>
          <SContainer padding="6px">
            <SList>
              <SListItem>
                2020/05/04: GitHubを使ってページの公開を開始
              </SListItem>
              <SListItem>2020/05/12: CSSの適用を開始</SListItem>
              <SListItem>2020/05/04: Twitterを追加</SListItem>
              <SListItem>2020/05/03: プロフィールを追加</SListItem>
              <SListItem>2020/04/23: ページを開設</SListItem>
            </SList>
          </SContainer>
        </SContainer>

        <SContainer padding="6px 0">リンク集</SContainer>
        <SList>
          <SListItem>
            <SLink href="https://twitter.com/okmtyuta">Twitter</SLink>
          </SListItem>
          <SListItem>
            <SLink href="https://twitter.com/okmtyuta">pixiv</SLink>
          </SListItem>
          <SListItem>
            <SLink href="https://github.com/okmtyuta">GitHub</SLink>
          </SListItem>
          <SListItem>
            <SLink href="https://twitter.com/okmtyuta">ホームページ</SLink>
          </SListItem>
        </SList>
      </SContainer>
    </ThirdVisionStyled>
  );
};
