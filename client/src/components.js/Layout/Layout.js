import React from 'react'
import Header from './Header'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <>
      <Header></Header>
      <div className="content container mt-4">{children}</div>
      <Footer></Footer>
    </>
  )
}

export default Layout
