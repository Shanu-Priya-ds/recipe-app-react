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
        console.log(`Failed to fetch recipes for the food category: ${categoryName} `);
        return [];
    }finally{

    }
}

export async function fetchRecipeDetailsById(recipeId:string):Promise<RecipeDetails[]>{

    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
        if(response.ok){
            const data = await response.json();
            return data.meals ?? [];
        }else{
            throw Error(`HTTP Error: ${response.status}`);
        }
    }catch(ex){
        console.log(`Failed to fetch recipes for the recipe Id: ${recipeId}`)
        return [];
    }finally{

    }

}

export async function searchRecipies(searchValue:string):Promise<RecipeDetails[]>{
    
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            return data.meals;
        }else{
            throw Error(`HTTP Error: ${response.status}`);
        }

    }catch(ex){
        console.log(`Failed to fetch recipes for the search value ${searchValue}`);
        return [];
    }
}

export async function fetchMultipleRecipiesById(recipieIds: string[]):Promise<RecipeDetails[]>{
    if(recipieIds.length==0) return [];
    try{    
        const recipes = await Promise.all(recipieIds.map(id=>fetchRecipeDetailsById(id)));//promise.all gives resolved values hot promise objects,
        return recipes.flat();//Since each fetchRecipeDetailsById() returns an array, we get nested arrays
        //.flat() flattens one level, giving us a single array of recipe objects
    }catch(ex){
        console.error("Failed to fetch favorite recipes:", ex);
        return [];
    }

}