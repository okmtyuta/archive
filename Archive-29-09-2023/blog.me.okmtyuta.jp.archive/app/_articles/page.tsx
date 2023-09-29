import { Frame, List, ListItem, Link } from '@okmtyuta/amatelas'
import NextLink from 'next/link'

type Article = {
  id: string
  title: string
  body: string
}

const getAllArticle = async () => {
  const res = await fetch(`${process.env.API_URL}/articles` || '')
  const articles: Article[] = await res.json()
  return articles
}

const Page = async () => {
  const articles = await getAllArticle()
  return (
    <>
      <Frame>
        <List>
          {articles.map((article) => {
            return (
              <ListItem key={crypto.randomUUID()}>
                <Link tag={NextLink} href={`/articles/${article.id}`}>
                  {article.title}
                </Link>
              </ListItem>
            )
          })}
        </List>
      </Frame>
    </>
  )
}

export default Page
