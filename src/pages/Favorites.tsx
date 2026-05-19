import { useContext } from "react";
import {FavoritesContext} from "../context/FavoritesContext ";
import RecipeCard from "../components/RecipeCard";
import useFetch from "../hooks/useFetch";
import { fetchMultipleRecipiesById } from "../services/recipeService";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

function Favourites(){

    const {favRecipes} = useContext(FavoritesContext);
    const {data, loading, error} = useFetch({
        serviceFun: () => fetchMultipleRecipiesById(favRecipes)
    });
    if(loading) return (<Spinner/>)
    return (<>
        {error && <ErrorMessage message={error} />}
        {favRecipes.length>0 ?
            data.map((recipe)=> <RecipeCard key={recipe.idMeal} recipeDetails={recipe}/>)
            : <div>No favorites yet</div>
        }
    </>)
}
export default Favourites;