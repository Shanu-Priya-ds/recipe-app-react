import type { Category } from "../types/recepie";

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
    }
}
