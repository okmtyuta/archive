import styled from "styled-components";

export const TwoColumns = styled.section`
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1024px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
`

export const TwoColumnsColumn = styled.section`
  min-width: 0;
`