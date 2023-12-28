import React from 'react'
import Navbar from './Navbar'
import footer from './footer'

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <footer />
    </>
  )
}

export default Layout
