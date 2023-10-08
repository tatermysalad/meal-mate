import { useContext } from "react";
import PantryListDisplay from "../components/PantryListDisplay";
import PantryListForm from "../components/PantryListForm";
import RecipeDisplay from "../components/RecipeDisplay";
import { RecipeSearch } from "../components/RecipeSearch";
import logo from "../img/meal_mate.png";
import { RecipeContext } from "../context/RecipeContext";

export default function HomePage() {
    const { list, setRecipesShow } = useContext(RecipeContext);


    let handleButtonClick = async () => {
        const response = await RecipeSearch(list);
        setRecipesShow(response);
    };

    return (
        <div>
            <img src={logo} alt="Meal Mate Logo" id="logo" />
            <div className="mainSection">
                <div className="PantryList">
                    <div>
                        <PantryListForm />
                    </div>
                    <div id="pantryListDisplay">
                        <PantryListDisplay />
                    </div>
                    <button onClick={() => handleButtonClick()}>Fetch recipes</button>
                </div>
                <div className="RecipeDisplay"><RecipeDisplay /></div>
            </div>
        </div>
    );
}
