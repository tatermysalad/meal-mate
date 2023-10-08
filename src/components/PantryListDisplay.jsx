import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

export default function PantryListDisplay() {
    const [localStorageList, setLocalStorageList] = useLocalStorage("list", []);

    useEffect(() => {
        console.log("Component rendered");
    }, [localStorageList]);

    let handleItemRemove = (value) => {
        const updatedList = localStorageList.filter((item) => item !== value);
        setLocalStorageList(updatedList);
    };

    return (
        <div>
            <h3>Pantry List</h3>
            {Array.isArray(localStorageList) && localStorageList.length > 0 ? (
                <ul>
                    {localStorageList.map((item) => (
                        <li key={item} onClick={() => handleItemRemove(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No items in the pantry list.</p>
            )}
        </div>
    );
}
