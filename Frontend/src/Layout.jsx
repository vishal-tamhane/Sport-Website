import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
// import NavbarDemo from './components/NavbarDemo'
// import FloatingDock from './components/ui/FloatingDock'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Header />
      <main className="flex-grow pt-40">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout