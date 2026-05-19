import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import useFetch from "../hooks/useFetch";
import { searchRecipies } from "../services/recipeService";
import type { Recipe } from "../types/recipe";

function SearchResults(){

    const [queryParam] = useSearchParams();
    const searchValue = queryParam.get("query");
    const searchResults = useFetch({serviceFun:()=> searchValue? searchRecipies(searchValue):Promise.resolve([])});

    useEffect(() => {
        if (searchResults.length > 0) {
            const existing: Recipe[] = JSON.parse(localStorage.getItem("allRecipes") || "[]");
            const existingIds = new Set(existing.map(r => r.idMeal));
            const newOnes = searchResults.filter(r => !existingIds.has(r.idMeal));
            localStorage.setItem("allRecipes", JSON.stringify([...existing, ...newOnes]));
        }
    }, [searchResults]);

    return(<>{searchResults && searchResults.length>0 ?
        searchResults.map((recipie)=><RecipeCard recipeDetails={recipie}/>) :
        <span>No data Available</span>
    }</>)
}

export default SearchResults;