import { createContext } from "react";

export const FavoritesContext = createContext({
    isFavouriteRecipe : false,
    toggleFavourites : ()=>{}
});