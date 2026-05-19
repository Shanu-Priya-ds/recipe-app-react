import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { fetchRecipieCategories } from "../services/recipeService";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

function Home() {
    const {data, loading} = useFetch({ serviceFun: fetchRecipieCategories });

    useEffect(() => {
        console.log(data);
    }, [data]);

    if(loading) return <Spinner/>
    return (<>
        <h1 className="text-4xl text-center m-5">Recipe Category</h1>
        <div className="flex flex-wrap justify-center">
            {data.map(category => (
                <div
                    className="w-100  shadow-lg rounded-lg flex flex-col 
                    flex-wrap gap-5 p-5 m-5 place-items-center"
                    key={category.idCategory}>
                    <Link to={`/category/${category.strCategory}`} >
                        <img src={category.strCategoryThumb} />
                    </Link>
                    <h3>{category.strCategory}</h3>
                    <p>{category.strCategoryDescription}</p>
                </div>
            ))}
        </div>
    </>
    );
}

export default Home;
