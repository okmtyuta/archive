import { Button, Heading, TextArea, TextField, Progress } from '@okmtyuta/amatelas/server'
import styles from './update-article.module.css'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { env } from '../../../../env'

interface Article {
  title?: string
  body?: string
}

export const ArticlesUpdate = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [article, setArticle] = useState<Article>()
  const [loading, setLoading] = useState(true)

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
      <Heading>Update a new article</Heading>

      <div className={styles['articles-update']}>
        <TextField
          defaultValue={article?.title}
          onChange={(e) => {
            setArticle((prev) => {
              return {
                ...prev,
                title: e.target.value
              }
            })
          }}
          placeholder="title"
        />
        <div className={styles['content']}>
          <TextArea
            defaultValue={article?.body}
            onChange={(e) => {
              setArticle((prev) => {
                return {
                  ...prev,
                  body: e.target.value
                }
              })
            }}
            placeholder="body"
          />
        </div>
      </div>

      <div className={styles['button']}>
        <Button
          onClick={async () => {
            const response = await fetch(`${env.API_URL}/articles/update`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                id: id,
                ...article
              })
            })

            if (response.ok) {
              const updatedArticle: {
                id: number
                title: string
                content: string
                articleed: Date
              } = await response.json()
              const id = updatedArticle.id

              navigate(`/articles/${id}`)
            }
          }}
          variant="filled"
          color="info"
          className={styles['button']}
        >
          SUBMIT
        </Button>
      </div>
    </>
  )
}
