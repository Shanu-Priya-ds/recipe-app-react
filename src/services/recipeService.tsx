import type { Category, Recipe, RecipeDetails } from "../types/recipe";

export async function fetchRecipieCategories(): Promise<Category[]> {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    if (!response.ok) {
        throw new Error(`Failed to fetch categories: ${response.status}`);
    }
    const data = await response.json();
    return data.categories;
}

export async function fetchRecipiesByCategory(categoryName:string):Promise<Recipe[]>{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
    if(!response.ok){
        throw new Error(`Failed to fetch recipes for category: ${categoryName}`);
    }
    const recipiesData = await response.json();
    return recipiesData.meals;
}

export async function fetchRecipeDetailsById(recipeId:string):Promise<RecipeDetails[]>{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
    if(!response.ok){
        throw new Error(`Failed to fetch recipe details: ${response.status}`);
    }
    const data = await response.json();
    return data.meals ?? [];
}

export async function searchRecipies(searchValue:string):Promise<RecipeDetails[]>{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
    if(!response.ok){
        throw new Error(`Failed to search recipes: ${response.status}`);
    }
    const data = await response.json();
    return data.meals;
}

export async function fetchMultipleRecipiesById(recipieIds: string[]):Promise<RecipeDetails[]>{
    if(recipieIds.length==0) return [];
    const recipes = await Promise.all(recipieIds.map(id=>fetchRecipeDetailsById(id)));
    return recipes.flat();
}