import { useNavigate } from "react-router-dom";
import recipeIcon from "../assets/recipeIcon.jpg";

function Navbar() {

    const navigate = useNavigate();

    const searchRecipes = (e) => {
        const searchText = e.target.value;
        if (e.key == "Enter") {
            console.log(searchText);
            navigate(`/search?query=${searchText}`);
        }
    }

    return (<nav className="h-25 shadow-xl flex justify-between  p-5">
        <div className="flex gap-2 place-items-center ">
            <img className="w-12 h-12  rounded-full" src={recipeIcon} alt="Recipe icon" />
            <h1 className="text-2xl ">Recipe Discovery</h1>
        </div>
        <input type="text" onKeyUp={searchRecipes} className="shadow-xl rounded-md p-5 place-self-end" placeholder="Search for recipes by name" />
    </nav>);
}
export default Navbar;