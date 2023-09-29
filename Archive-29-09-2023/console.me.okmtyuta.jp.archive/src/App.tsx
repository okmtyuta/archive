import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import { Index } from './pages/Index'
import { ArticlesCreate } from './pages/articles/create/create-article'
import { Articles } from './pages/articles/articles'
import { Article } from './pages/articles/[id]/article'
import { ArticlesUpdate } from './pages/articles/update/[id]/update-article'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />

          <Route path="articles">
            <Route path="create" element={<ArticlesCreate />} />
            <Route path="update">
              <Route path=":id" element={<ArticlesUpdate />} />
            </Route>
            <Route index element={<Articles />} />
            <Route path=":id" element={<Article />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
