import { useEffect, useState } from "react";
import { fetchRecipieCategories } from "../services/recipieService";

function useFetch(){

    const[data, setData] = useState([]);

    useEffect(()=>{
        const fetchData = async() =>{
             const resp = await fetchRecipieCategories();
         setData(resp);
        }
        fetchData();
    },[])

  return (data);
}

export default useFetch;