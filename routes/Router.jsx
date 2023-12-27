import Home from '../src/components/Home'
import SearchRoutes from '../src/components/SearchRoutes'
import Track from '../src/components/Track'
import Sajha from '../src/components/busroutes/Sajha'
import NepalYatayat from '../src/components/busroutes/NepalYatayat'
import { Route, Routes } from 'react-router-dom'

// Routing to different pages
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/track" element={<Track />} />
        <Route path="/searchroutes" element={<SearchRoutes />} />
        <Route path="/searchroutes/sajharoutes" element={<Sajha />} />
        <Route path="/searchroutes/nepalyatayatroutes" element={<NepalYatayat />} />
      </Routes>
    </div>
  )
}

export default Router
