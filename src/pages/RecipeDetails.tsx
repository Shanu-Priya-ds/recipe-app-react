import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { fetchRecipeDetailsById } from "../services/recipeService";
import RecipeCard from "../components/RecipeCard";

function RecipeDetails(){

    const {recipeId} = useParams();
    const recipeDetails = recipeId? useFetch({serviceFun:()=>fetchRecipeDetailsById(recipeId)}): null;

    return (<>
    {recipeDetails && <RecipeCard recipeDetails={recipeDetails[0]}/>}
    </>)
}

export default RecipeDetails;