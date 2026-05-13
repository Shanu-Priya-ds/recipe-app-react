export interface Category {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}


export interface Recipie{
strMeal:string;
strMealThumb:string;
idMeal:string;
strArea:string;
strCountry:string;
}

export interface RecipieDetails{
    idMeal: string;
    strMeal: string; 
    strMealAlternate : string;
    strCategory : string;
    strArea : string;
    strCountry : string;
    strMealThumb : string;
    strTags : string;
    strYoutube : string;
    strIngredient1 : string;
    strIngredient2 : string;
    strIngredient3 : string;
    strIngredient4 : string;
    strIngredient5 : string;
    strIngredient6 : string;
    strIngredient7 : string; 
    strIngredient8 : string;
    strIngredient9 : string;
    strMeasure1 : string;
    strMeasure2 : string;
    strMeasure3 : string;
    strMeasure4 : string;
    strMeasure5 : string;
    strMeasure6 : string;
    strMeasure7 : string;
    strMeasure8 : string;
    strMeasure9 : string;
    strSource : string;
    strImageSource : string;
    strCreativeCommonsConfirmed : string;
    dateModified : string;
}