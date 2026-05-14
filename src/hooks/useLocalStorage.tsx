import { useEffect, useState } from "react";

function useLocalStorage(){
    const[favRecipes, setFavRecipes] = useState<string[]>(()=>{
       const favRecipeString = localStorage.getItem("favRecipes");
       const favRecipeArray = favRecipeString ? JSON.parse(favRecipeString) :[]
       return favRecipeArray;
    }
    );

   useEffect(()=>{
        console.log(favRecipes);
        localStorage.setItem("favRecipes", JSON.stringify(favRecipes));
   },[favRecipes]);

    return({favRecipes, setFavRecipes});
}

export default useLocalStorage;