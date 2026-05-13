
import './App.css'
import Recipies from './pages/Recipies'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>

        </Route>
        <Route path="/category/:categoryName" element={<Recipies />}>
        </Route>
      </Routes>
    </>
  )
}

export default App
