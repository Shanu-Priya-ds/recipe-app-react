
import './App.css'
import RecipeDetails from './pages/RecipeDetails'
import Recipies from './pages/Recipes'
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
        <Route path="recipe/:recipeId" element = {<RecipeDetails/>}>

        </Route>
      </Routes>
    </>
  )
}

export default App
