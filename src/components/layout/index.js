import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'

function Layout ({ children }) {
  return (
    <div className='layout'>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
