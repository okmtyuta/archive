import styled from "styled-components";

const FirstVisionStyled = styled.div`
  font-family: serif;
`;

export const FirstVision = () => {
  return (
    <FirstVisionStyled>
      <center>
        <h1>GrandeVue</h1>
      </center>
      <center>
        みなさんこんにちは。今後はここにイラストを投稿していこうと思います。
      </center>

      <h4>プロフィール</h4>
      <ul>
        <li>ユーザー名: okamotoyouta</li>
        <li>所属: 大学</li>
        <li>
          Twitterをフォローしてください:{" "}
          <a href="https://twitter.com/okmtyuta">Twitter</a>
        </li>
      </ul>
      <hr />
      <h4>更新履歴</h4>
      <ul>
        <li>2020/05/04: Twitterを追加</li>
        <li>2020/05/03: プロフィールを追加</li>
        <li>2020/04/23: ページを開設</li>
      </ul>
      <h4>開設目的</h4>
      <ul>
        <p>
          絵を描くのが好きなので，オリジナルイラストを投稿するサイトとして作りました。
        </p>
        <p>
          Webページのことはよくわからないので勉強しながら作成していこうと思います。
        </p>
      </ul>
    </FirstVisionStyled>
  );
};
