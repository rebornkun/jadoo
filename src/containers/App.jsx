import { Navigate, Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import Home from '../pages/Home/Home'
import './App.css'

function App() {

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <section>
        <Routes>
          <Route path='/' element={<Navigate to='home' />} />
          <Route path='home' element={<Home />} />
        </Routes>
      </section>
    </div>
  )
}

export default App
