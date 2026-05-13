
import './App.css'
import Category from './pages/Category'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>

        </Route>
        <Route path="/category/:categoryName" element={<Category />}>
        </Route>
      </Routes>
    </>
  )
}

export default App
