import Home from '../src/components/Home'
import SearchRoutes from '../src/components/SearchRoutes'
import Track from '../src/components/Track'
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
      </Routes>
    </div>
  )
}

export default Router
