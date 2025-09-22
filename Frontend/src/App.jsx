import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import HomePage from './components/HomePage'
import UpdatesPage from './pages/UpdatesPage'
import SportsPage from './pages/SportsPage'
import RegistrationForm from './components/RegistrationForm'
import GalleryItem from './components/GalleryItem'
import TeamPage from './components/members/TeamPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="updates" element={<UpdatesPage />} />
        <Route path="Registration" element={<RegistrationForm/>} />
        <Route path="sports" element={<SportsPage />} />
        <Route path="gallery" element={<GalleryItem/>}/>
        <Route path="members" element={<TeamPage />} />
        <Route path="*" element={<div className="container mx-auto py-20 px-4 text-center text-4xl">404 Not Found</div>} />
      </Route>
    </Routes>
    
  )
}

export default App
