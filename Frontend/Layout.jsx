import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
        {/* The Outlet component will render the matched child route */}
      <Footer />
    </div>
  )
}

export default Layout
