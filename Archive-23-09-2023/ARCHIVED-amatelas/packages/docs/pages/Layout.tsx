import { Footer } from '../parts/footer/Footer'
import { Header } from '../parts/header/Header'
import { Outlet } from 'react-router-dom'
import '../../main.scss'
import { SingleFrame } from '../..'

// check config

export const Layout = () => {
  return (
    <>
      <Header />
      <SingleFrame>
        <Outlet />
      </SingleFrame>
      <Footer />
    </>
  )
}
