import { Button, Heading, TextArea, TextField } from '@okmtyuta/amatelas/server'
import styles from './create-article.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { env } from '../../../env'

interface Article {
  title?: string
  body?: string
}

export const ArticlesCreate = () => {
  const [article, setArticle] = useState<Article>({})
  const navigate = useNavigate()
  return (
    <>
      <Heading>Create a new article</Heading>
      <div className={styles['articles-create']}>
        <TextField
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
            const response = await fetch(`${env.API_URL}/articles`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(article)
            })

            if (response.ok) {
              const createdArticle: {
                id: number
                title: string
                content: string
                articleed: Date
              } = await response.json()
              const id = createdArticle.id

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
