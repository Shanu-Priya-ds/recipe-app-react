import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { fetchRecipiesByCategory } from "../services/recipeService";
import type { Recipe } from "../types/recipe";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

function Recipes() {

    const { categoryName } = useParams();
    (categoryName && categoryName !== "")
    const { data: categoryRecipies, loading, error } = useFetch(
        {
            serviceFun: () => (categoryName && categoryName !== "") ?
                fetchRecipiesByCategory(categoryName) : Promise.resolve([])
        });

    useEffect(() => {
        if (categoryRecipies.length > 0) {
            const existing: Recipe[] = JSON.parse(localStorage.getItem("allRecipes") || "[]");
            const existingIds = new Set(existing.map(r => r.idMeal));
            const newOnes = categoryRecipies.filter(r => !existingIds.has(r.idMeal));
            localStorage.setItem("allRecipes", JSON.stringify([...existing, ...newOnes]));
        }
    }, [categoryRecipies])

    if(loading) return(<Spinner/>)

    return (<>
        {error && <ErrorMessage message={error} />}
    <div className="flex justify-center flex-wrap">
        {categoryRecipies && categoryRecipies.map(recipe =>
            <div key={recipe.idMeal} className="flex  w-80 flex-col m-5 shadow-lg rounded-xl overflow-hidden">
                <Link to={`/recipe/${recipe.idMeal}`}>
                    <img src={recipe.strMealThumb} />
                </Link>
                <div className="p-3 text-center">
                    <h3 className="text-xl pb-2">{recipe.strMeal}</h3>
                    <p>Country: {recipe.strCountry}</p>
                    <p>Cuisine: {recipe.strArea}</p>
                </div>
            </div>
        )}
    </div>
    </>);
}

export default Recipes;