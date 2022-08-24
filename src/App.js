import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Adoption from './pages/Adoption'
import Health from './pages/Health'
import Home from './pages/Home'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/adoption' element={<Adoption/>} />
        <Route path='/health' element={<Health/>} />
        <Route
          path='*'
          element={
            <>
              <h1>Error page not found</h1>
              <ul>
                <li>Home</li>
                <li>Adoption</li>
                <li>Health</li>
              </ul>
            </>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
