import { useEffect, useContext } from "react";
import PantryListDisplay from "../components/PantryListDisplay";
import PantryListForm from "../components/PantryListForm";
import RecipeDisplay from "../components/RecipeDisplay";
import { RecipeSearch } from "../components/RecipeSearch";
import logo from "../img/meal_mate.png";
import RecipeProvider, {RecipeContext} from "../context/RecipeContext";
import { useLocalStorage } from "react-use";

export default function HomePage() {
    const {
        recipes,
        setRecipes,
        listToShow,
        setListToShow,
        newListValue,
        setNewListValue
    } = useContext(RecipeContext);

    const [listItems, setStoredListItems] = useLocalStorage("list", listToShow);


    let handleButtonClick = async () => {
        const recipes = await RecipeSearch(listItems);
        setRecipes({ recipes });
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
                        {/* <PantryListDisplay /> */}
                    </div>
                    <button onClick={() => handleButtonClick()}>Fetch recipes</button>
                </div>
                <div className="RecipeDisplay">
                    {/* <RecipeDisplay /> */}
                </div>
            </div>
        </div>
    );
}
