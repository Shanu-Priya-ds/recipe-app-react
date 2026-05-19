import { useContext } from "react";
import type { RecipeDetails } from "../types/recipe";
import { FavoritesContext } from "../context/FavoritesContext ";
import fav from "../assets/fav.png";
import fav_red from "../assets/fav_red.png";


function RecipeCard({ recipeDetails }: { recipeDetails: RecipeDetails | null }) {

    if (recipeDetails == null) return;

    const instructionsArray = recipeDetails?.strInstructions.split(".");
    //console.log(instructionsArray);

    const { addFavRecipes, removeFavRecipes, favRecipes } = useContext(FavoritesContext);

    const toggleFavourites = () => {
        if (favRecipes.includes(recipeDetails.idMeal))
            removeFavRecipes(recipeDetails.idMeal);
        else
            addFavRecipes(recipeDetails.idMeal);
    }

    return (<>
        {recipeDetails ?
            <div className="flex flex-col gap-5 mx-5 my-10 items-center">
                <h1 className="text-xl font-bold">{recipeDetails.strMeal}</h1>
                <figure className="relative">
                    <img className="w-100 h-100 object-contain rounded-xl" src={recipeDetails.strMealThumb}
                        alt={recipeDetails.strMeal} />
                        <div  className=" absolute top-1 right-3 cursor-pointer" onClick={toggleFavourites}>
                    {favRecipes.includes(recipeDetails.idMeal) ?<span title="Remove from favourtie">&#x2764;</span> 
                     : <img src={fav} alt="Favourite Icon"
                        title= "Add to favourites"
                        />}</div>
                    <figcaption>Category: {recipeDetails.strCategory}, Cuisine: {recipeDetails.strArea}</figcaption>
                </figure>
                <div className="m-2">
                    <h3 className="text-xl font-semibold">Ingredients:</h3>
                    <ol className="my-5 pl-5 ">
                        {Array.from({ length: 20 }, (_, i) => {
                            const ingredient = recipeDetails[`strIngredient${i + 1}` as keyof RecipeDetails];
                            return (ingredient && ingredient.trim() !== "") &&
                                <li key={i + 1}>{recipeDetails[`strIngredient${i + 1}` as keyof RecipeDetails]} :
                                    {recipeDetails[`strMeasure${i + 1}` as keyof RecipeDetails]}</li>
                        })
                        }
                    </ol>
                    {instructionsArray && <div><h3 className="text-xl font-semibold">Instructions:</h3>
                        <div className="pl-10 py-5">
                            {instructionsArray.map((instruction) => <li>{instruction}.</li>)}</div>
                    </div>}
                    {recipeDetails.strSource && <a href={recipeDetails.strSource} target="_blank">Source</a>}
                    {recipeDetails.strYoutube && <a href={recipeDetails.strYoutube} target="_blank"> YouTube</a>}
                </div>
            </div>
            : "Recipe Details are not available"}

    </>);
}

export default RecipeCard;