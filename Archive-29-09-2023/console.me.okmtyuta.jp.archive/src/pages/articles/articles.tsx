import { Heading, Link, List, ListItem, Progress } from '@okmtyuta/amatelas/server'
import { useEffect, useState } from 'react'
import { env } from '../../env'

interface Article {
  id?: number
  title?: string
  content?: string
}

export const Articles = () => {
  const [articles, setArticles] = useState<Article[]>()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getArticles = async () => {
      const res = await fetch(`${env.API_URL}/articles`)
      const articles: Article[] = await res.json()
      setArticles(articles)
      setLoading(false)
    }

    getArticles()
  }, [])

  if (loading) {
    return (
      <>
        <Heading>All article</Heading>
        <Progress />
      </>
    )
  }

  if (!articles) {
    return (
      <>
        <Heading>All article</Heading>
        <List></List>
      </>
    )
  }

  return (
    <>
      <Heading>All article</Heading>
      <List>
        {articles.map((article) => {
          return (
            <ListItem key={crypto.randomUUID()}>
              <Link href={`/articles/${article.id}`}>{article.title}</Link>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}
