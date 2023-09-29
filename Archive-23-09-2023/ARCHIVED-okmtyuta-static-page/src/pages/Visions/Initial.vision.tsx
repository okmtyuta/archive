import styled from "styled-components"

const InitialVisionStyled = styled.div`
  font-family: serif;
`

export const InitialVision = () => {
  return (
    <InitialVisionStyled>
      <div>
        WELCOME TO MY HOME PAGE
      </div>
      <div>
        THIS PAGE WAS CREATED AT 2020/04/23
      </div>
      <p>
        みなさんこんにちは。私は今大学1年生です。ここにイラストを投稿していこうと思います。
      </p>
      <ul>
        <li>
          Name: okamotoyouta
        </li>
        <li>
          Univercity
        </li>
      </ul>
    </InitialVisionStyled>
  )
}