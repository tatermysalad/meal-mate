import { createContext, useState } from "react";

export var defaultRecipeContext = {
    listToShow: [],
    setListToShow: () => { },
    newListValue: "",
    setNewListValue: () => { },
    recipes: [],
    setRecipes: () => { }
};

export let RecipeContext = createContext(defaultRecipeContext);

export default function RecipeProvider(props) {
    const [recipeContextData, setRecipeContextData] = useState(defaultRecipeContext);
    
    return (<RecipeContext.Provider value={{ recipeContextData }}>
        {props.children}
    </RecipeContext.Provider>)
}
