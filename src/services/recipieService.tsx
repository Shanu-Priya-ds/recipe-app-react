import type { Category, Recipie } from "../types/recepie";

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


export async function fetchRecipiesByCategory(categoryName:string):Promise<Recipie[]>{
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