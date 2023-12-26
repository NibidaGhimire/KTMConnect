import { BrowserRouter } from "react-router-dom"

import { Navbar } from './components'
import Router from '../routes/Router'


const App=()=> {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Router />         
      </div>
      </div>
    </BrowserRouter>
  )
}

export default App
