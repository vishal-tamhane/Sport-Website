import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
// import NavbarDemo from './components/NavbarDemo'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mt-50">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout