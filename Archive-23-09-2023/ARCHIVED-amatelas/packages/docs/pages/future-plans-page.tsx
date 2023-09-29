import { Link as RouterLink } from 'react-router-dom'
import { Title, Heading, Paragraph, Link } from '../..'

export const FuturePlansPage = () => {
  return (
    <>
      <Title posted="28th August 2023">Future Plans</Title>
      <Heading>Adding Components</Heading>

      <Paragraph>
        I want reproduce{' '}
        <Link tag={RouterLink} to="https://mui.com/">
          MUI
        </Link>{' '}
        components only with CSS. Because almost all of MUI components use React hooks, their components can not be
        utilized in Next.js server side rendering. In order me to use MUI-like components in SSR, I create components
        only with CSS, although some feature will be lost.
      </Paragraph>
    </>
  )
}
