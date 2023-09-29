import { Frame } from '@amatelas/server'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <Header />
      <Frame>
        <Outlet />
      </Frame>
      <Footer />
    </>
  )
}
