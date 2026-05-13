import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { fetchRecipiesByCategory } from "../services/recipieService";
import { useParams } from "react-router-dom";

function Recipies(){

    const {categoryName} = useParams();
    const categoryRecipies = (categoryName && categoryName!=="") ?
     useFetch({serviceFun: ()=>fetchRecipiesByCategory(categoryName)})
    : [];

    useEffect(()=>{
        console.log(categoryRecipies);
    },[categoryRecipies])

    return (<div className="flex justify-center flex-wrap">
    {categoryRecipies && categoryRecipies.map(recipie=>
        <div key={recipie.idMeal} className="flex  w-80 flex-col m-5  border-black border-1 rounded-xl overflow-hidden">
            <img src={recipie.strMealThumb}/>
            <div className="p-3 text-center">
            <h3 className="text-xl pb-2">{recipie.strMeal}</h3>
            <p>Country: {recipie.strCountry}</p>
            <p>Cuisine: {recipie.strArea}</p>
            </div>
        </div>
    )}
    </div>);
}

export default Recipies;