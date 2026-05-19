import { useContext } from "react";
import {FavoritesContext} from "../context/FavoritesContext ";
import RecipeCard from "../components/RecipeCard";

function Favourites(){

    const {favRecipes} = useContext(FavoritesContext);

    return <>{favRecipes.length>0 ?
    favRecipes.map(()=> <RecipeCard recipeDetails={null}/>)
     : <div>No favorites yet</div>}
     </>
}
export default Favourites;