import { useContext } from "react";
import {FavoritesContext} from "../context/FavoritesContext ";
import RecipeCard from "../components/RecipeCard";
import useFetch from "../hooks/useFetch";
import { fetchMultipleRecipiesById } from "../services/recipeService";

function Favourites(){

    const {favRecipes} = useContext(FavoritesContext);
     const favoriteRecipes = useFetch({
        serviceFun: () => fetchMultipleRecipiesById(favRecipes)
    });

    return <>{favRecipes.length>0 ?
    favoriteRecipes.map((recipe)=> <RecipeCard key={recipe.idMeal} recipeDetails={recipe}/>)
     : <div>No favorites yet</div>}
     </>
}
export default Favourites;