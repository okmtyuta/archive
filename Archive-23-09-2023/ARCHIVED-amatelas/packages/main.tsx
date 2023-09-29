import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TopPage } from './docs/pages/top-page'
import { DrawerDevPage } from './docs/pages/components/drawer/drawer-dev-page'
import { Layout } from './docs/pages/Layout'
import { DrawerPage } from './docs/pages/components/drawer-page'
import { FuturePlansPage } from './docs/pages/future-plans-page'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Top />
//   },
//   {
//     path: 'components/drawer/dev',
//     element: <DrawerDev />
//   }
// ])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<TopPage />} />
          <Route path="future-plans" element={<FuturePlansPage />} />
          <Route path="components/drawer/dev" element={<DrawerDevPage />} />
          <Route path="components/drawer" element={<DrawerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
