import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { fetchRecipeDetailsById } from "../services/recipeService";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

function RecipeDetails(){

    const {recipeId} = useParams();
    const {data:recipeDetails, loading, error} = useFetch({serviceFun:()=>recipeId? fetchRecipeDetailsById(recipeId): Promise.resolve([]) });

    return (<>
    {loading && <Spinner/>}
    {error && <ErrorMessage message={error} />}
    {(recipeDetails && recipeDetails.length>0) && <RecipeCard recipeDetails={recipeDetails[0]}/>}
    </>)
}

export default RecipeDetails;