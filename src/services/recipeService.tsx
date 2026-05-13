import type { Category, Recipe, RecipeDetails } from "../types/recipe";

export async function fetchRecipieCategories(): Promise<Category[]> {
    try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        if (response.ok) {
            const data = await response.json();
            return data.categories;
        } else {
            throw new Error(`HTTP error: ${response.status}`);
        }
    } catch (ex) {
        console.error("Exception occurred: " + ex);
        return [];
    }finally{

    }
}


export async function fetchRecipiesByCategory(categoryName:string):Promise<Recipe[]>{
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
        if(response.ok){
            const recipiesData = await response.json();
            return recipiesData.meals;
        }else{
            throw new Error(`HTTP error: ${response.status}`);
        }
    }catch(ex){
        console.log(`Failed to fetch recipies for the food category: ${categoryName} `);
        return [];
    }finally{

    }
}

export async function fetchRecipeDetailsById(recipeId:string):Promise<RecipeDetails[]>{

    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
        if(response.ok){
            const data = await response.json();
            return data.meals;
        }else{
            throw Error("");
        }
    }catch(ex){
        return [];
    }finally{

    }

}