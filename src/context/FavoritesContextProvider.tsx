import { useEffect, useState, type ReactNode } from "react";
import { FavoritesContext } from "./FavoritesContext ";
import useLocalStorage from "../hooks/useLocalStorage";

function FavoritesContextProvider({children}:{children:ReactNode}){
     //const {fav} = useLocalStorage();
     const {favRecipes, setFavRecipes} =  useLocalStorage();

    // const toggleFavourites=()=>{
    //     console.log("inside toggle favourites");
    //    setIsFavouriteRecipe(isFavouriteRecipe ? false: true);
    
    // }
    
    // useEffect(()=>{
    //        console.log(isFavouriteRecipe)
    // },[isFavouriteRecipe])

     
    const addFavRecipes = (recipeId:string) =>{
        console.log(recipeId);
        setFavRecipes(prev=>  [...prev, recipeId]);
    }

    const removeFavRecipes=(recipeId:string)=>{
        setFavRecipes(prev=> prev.filter((id)=> id != recipeId ))
    }

    const isFavouriteRecipe = (recipeId: string):boolean =>{
        const recipe:string | undefined = favRecipes.find(id=> id===recipeId);
        if(recipe && recipe!="") return false;
        return true;
    }

    
    return(<FavoritesContext.Provider value={{favRecipes, addFavRecipes , removeFavRecipes, isFavouriteRecipe}}>
        {children}
    </FavoritesContext.Provider>);
}

export default FavoritesContextProvider;