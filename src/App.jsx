import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className='bg-gray-200 min-h-screen text-black'>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route index element={<Home />}/>
            <Route path='/movie' element={<Contact />}/>
          </Routes>
        </Navbar>
      </BrowserRouter>
    </div>
  )
}

export default App
