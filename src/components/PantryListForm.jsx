import { useLocalStorage } from "react-use";
import { useContext, useState } from "react";
import { RecipeContext } from "../context/RecipeContext";

export default function PantryListForm() {
    const [ storedList, setStoredList ] = useLocalStorage("list")
    var [newItem, setNewItem] = useState("");

    const handleClick = (event) => {
        event.preventDefault();
        console.log(newItem);
        if (storedList.includes(newItem)) {
            alert(`${newItem} already exists`);
        } else if (newItem != "") {
            setStoredList([...storedList, newItem]);
            // setList([...list, newItem]);
            setNewItem("");
        }
    };

    return (
        <form >
            <label htmlFor="item">Add item: </label>
            <input type="text" name="item" id="itemInput" value={newItem} onChange={(event) => setNewItem(event.target.value)} />
            <button type="submit" onClick={handleClick}>
                Add
            </button>
            <h6>Click an item to remove it from the list</h6>
        </form>
    );
}
