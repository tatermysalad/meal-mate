import { defaultRecipeContext } from "../context/RecipeContext";
import {useLocalStorage} from "react-use";

export default function PantryListDisplay() {
    const [storedList, setStoredList] = useLocalStorage("list", defaultRecipeContext.listToShow)

    let handleItemRemove = (value) => {
        if (storedList.includes(value)) {
            alert(`${value} already exists`);
        } else {
            setStoredList([...storedList, value]);
        }
    };

    let listOfItems = storedList.map((value, index) => (
        <li key={index} onClick={() => handleItemRemove(value)}>
            {value}
        </li>
    ));

    return (
        <div>
            <h3>Pantry List</h3>
            <ul>{listOfItems}</ul>
        </div>
    );
}
