import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

function Category(){

    const data = useFetch();
    
    useEffect(()=>{
         console.log(data);
    },[data]);

    return(<>
    {data && data.map(category=> <li key={category["idCategory"]}>{category["strCategory"]}</li>)}
    </>)
}

export default Category;