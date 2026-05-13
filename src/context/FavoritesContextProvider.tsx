import { useEffect, useState, type ReactNode } from "react";
import { FavoritesContext } from "./FavoritesContext ";

function FavoritesContextProvider({children}:{children:ReactNode}){

    const [isFavouriteRecipe, setIsFavouriteRecipe] = useState(false);

    const toggleFavourites=()=>{
        console.log("inside toggle favourites");
       setIsFavouriteRecipe(isFavouriteRecipe ? false: true);
    
    }
    
    useEffect(()=>{
           console.log(isFavouriteRecipe)
    },[isFavouriteRecipe])
    
    return(<FavoritesContext.Provider value={{isFavouriteRecipe , toggleFavourites}}>
        {children}
    </FavoritesContext.Provider>);
}

export default FavoritesContextProvider;