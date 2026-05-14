import { createContext } from "react";


interface ContextProp{
    isFavouriteRecipe(recipeId:string): boolean,
    addFavRecipes(recipeId:string):void,
    removeFavRecipes(recipeId:string):void,
    favRecipes:string[]
}

export const FavoritesContext = createContext<ContextProp>({
    addFavRecipes : ()=>{},
    removeFavRecipes: () =>{},
    favRecipes:[],
    isFavouriteRecipe : ()=>false
});