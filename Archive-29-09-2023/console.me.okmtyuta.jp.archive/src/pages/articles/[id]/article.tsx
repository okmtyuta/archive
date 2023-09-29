import { useNavigate, useParams } from 'react-router-dom'
import { Button, Progress, Title } from '@okmtyuta/amatelas/server'
import { Markdown } from '@okmtyuta/amatelas/markdown'
import { useEffect, useState } from 'react'
import { env } from '../../../env'

import styles from './article.module.css'

interface Article {
  id: number
  title: string
  body: string
  // articleed: Date
}

export const Article = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  const [article, setArticle] = useState<Article>()
  useEffect(() => {
    const getArticle = async () => {
      const res = await fetch(`${env.API_URL}/articles/${id}`)
      const article: Article = await res.json()
      setArticle(article)
      setLoading(false)
    }

    getArticle()
  }, [id])

  if (loading) {
    return (
      <>
        <Progress />
      </>
    )
  }

  return (
    <>
      <Title authors={[{ name: 'okmtyuta', href: 'https://me.okmtyuta.jp', account: '@okmtyuta' }]}>
        {article?.title}
      </Title>
      <Markdown>{article?.body || ''}</Markdown>

      <div className={styles['delete']}>
        <Button
          onClick={async () => {
            navigate(`/articles/update/${id}`)
          }}
          variant="outlined"
          color="success"
        >
          EDIT
        </Button>
        <Button
          onClick={async () => {
            await fetch(`${env.API_URL}/articles/delete`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ id })
            })

            navigate('/articles')
          }}
          variant="filled"
          color="danger"
        >
          DELETE
        </Button>
      </div>
    </>
  )
}
