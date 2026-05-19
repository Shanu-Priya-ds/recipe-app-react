import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import useFetch from "../hooks/useFetch";
import { searchRecipies } from "../services/recipeService";
import type { RecipeDetails } from "../types/recipe";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

function SearchResults(){

    const [queryParam] = useSearchParams();
    const searchValue = queryParam.get("query");
    const { data: searchResults, loading, error } = useFetch({
        serviceFun: () => searchValue ? searchRecipies(searchValue) : Promise.resolve([])
    });

    useEffect(() => {
        if (searchResults.length > 0) {
            const existing: RecipeDetails[] = JSON.parse(localStorage.getItem("allRecipes") || "[]");
            const existingIds = new Set(existing.map(r => r.idMeal));
            const newOnes = searchResults.filter(r => !existingIds.has(r.idMeal));
            localStorage.setItem("allRecipes", JSON.stringify([...existing, ...newOnes]));
        }
    }, [searchResults]);

    if (loading) return <Spinner/>;

    return(<>
        {error && <ErrorMessage message={error} />}
        {searchResults && searchResults.length > 0 ?
        searchResults.map((recipe) => <RecipeCard key={recipe.idMeal} recipeDetails={recipe}/>) :
        <span>No data Available</span>
    }</>)
}

export default SearchResults;