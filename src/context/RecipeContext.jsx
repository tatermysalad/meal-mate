import { createContext, useState } from "react";
import { useLocalStorageState } from "../hooks/LocalStorage";

export var defaultRecipeContext = {
    listToShow: [],
    newListValue: "",
    recipes: [],
};

export let RecipeContext = createContext(null);

// eslint-disable-next-line react/prop-types
export default function RecipeProvider({ children }) {
    const [listToShow, setListToShow] = useLocalStorageState("list", defaultRecipeContext.listToShow)
    const [newListValue, setNewListValue] = useState(defaultRecipeContext.newListValue);
    const [recipes, setRecipes] = useState(defaultRecipeContext.recipes);

    return (
        <RecipeContext.Provider
            value={{
                list: listToShow,
                setList: setListToShow,
                newValue: newListValue,
                setNewValue: setNewListValue,
                recipes: recipes,
                setRecipes: setRecipes,
            }}
        >
            {children}
        </RecipeContext.Provider>
    );
}
