import { useLocalStorage } from "react-use";
import { useEffect, useState } from "react";
import { defaultRecipeContext } from "../context/RecipeContext";


export default function PantryListForm() {
    const [storedList, setStoredList] = useLocalStorage("list", defaultRecipeContext.listToShow);
    var [newItem, setNewItem] = useState("");
    let handleSubmit = (event) => {
        event.preventDefault()
        if (storedList.includes(newItem)) {
            alert(`${newItem} already exists`);
        } else {
            setStoredList([...storedList, newItem]);
        }
        setNewItem("");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    return (
        <form
            onSubmit={() => {
                setNewItem(newItem);
                handleSubmit();
            }}
        >
            {/* htmlFor instead of for, for the compiler */}
            <label htmlFor="item">Add item: </label>
            <input type="text" name="item" id="itemInput" placeholder="Enter item" value={newItem} onChange={() => setNewItem(newItem)} />
            <button type="submit">Add</button>
            <h6>Click an item to remove it from the list</h6>
        </form>
    );
}
