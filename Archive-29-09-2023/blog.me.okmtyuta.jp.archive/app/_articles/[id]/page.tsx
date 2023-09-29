import { Frame, Title } from '@okmtyuta/amatelas'

type Params = {
  id: string
}
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

const getArticleById = async (id: string) => {
  const res = await await fetch(`${process.env.API_URL}/articles/${id}` || '')
  const article: Article = await res.json()
  return article
}

export async function generateStaticParams() {
  const articles = await getAllArticle()

  return articles.map((article) => {
    return {
      id: article.id.toString()
    }
  })
}

const Page = async ({ params }: { params: Params }) => {
  const article = await getArticleById(params.id)
  if (!article) {
    return (
      <>
        <Frame>POST NOT FOUND</Frame>
      </>
    )
  }

  return (
    <>
      <Frame>
        <Title authors={[{ name: 'okmtyuta', account: '@okmtyuta', href: 'https://me.okmtyuta.jp' }]}>
          {article.title}
        </Title>

        {/* <Markdown>{article.body}</Markdown> */}
      </Frame>
    </>
  )
}

export default Page
