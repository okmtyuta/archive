import { Frame, Progress } from '@okmtyuta/amatelas/server'
import '@okmtyuta/amatelas/server/index.css'
import './reset.css'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'

import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

export const Layout = () => {
  return (
    <>
      <Header />
      <Frame className="frame">
        <Suspense fallback={<Progress />}>
          <Outlet />
        </Suspense>
      </Frame>
      <Footer />
    </>
  )
}
