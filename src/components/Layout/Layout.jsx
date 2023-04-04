import React from 'react'
import Footer from '../Footer/Footerf'
import Header from '../Header/Header'
import Routers from '../../routers/Routers'

const Layout = () => {
  return (
    <div>
        <Header />
        <div>
            <Routers />
        </div>
        <Footer />
      
    </div>
  )
}

export default Layout
