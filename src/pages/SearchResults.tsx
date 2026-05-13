import { useSearchParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import useFetch from "../hooks/useFetch";
import { searchRecipies } from "../services/recipeService";
import RecipeDetails from "./RecipeDetails";

function SearchResults(){


    const [queryParam] = useSearchParams();
    const searchValue = queryParam.get("query");
    const searchResults = useFetch({serviceFun:()=> searchValue? searchRecipies(searchValue):Promise.resolve([])});


    return(<>{searchResults && 
        searchResults.map((recipie)=><RecipeCard recipeDetails={recipie}/>)
    }</>)
}

export default SearchResults;