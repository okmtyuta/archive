import { Frame, Heading, List, ListItem, Link } from '@okmtyuta/amatelas/server'

export const Index = () => {
  return (
    <>
      <Frame>
        <Heading type="h1">Menu</Heading>
        <List>
          <ListItem>
            <Link href="/articles/create">Create a new article</Link>
          </ListItem>
          <ListItem>
            <Link href="/articles">All articles</Link>
          </ListItem>
        </List>
      </Frame>
    </>
  )
}
