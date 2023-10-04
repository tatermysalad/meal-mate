import RecipeContext from "../context/RecipeContext";
import { apiTestResult } from "./TestingData";
import { useContext } from "react";

export async function RecipeSearch() {
    const [ingredients] = useContext(RecipeContext.listToShow)
    const apiKey = import.meta.env.VITE_API_BASE_URL
    console.log(apiKey)
    let ingredientsString = ingredients.toString();
    console.log(ingredientsString)
    // let recipes = await fetch(
    //     `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredientsString}&ranking=2&number=5`
    // ).catch((error) => {
    //     throw new Error("API failure.");
    // });
    // if (recipes.status === 404) {
    //     throw new Error("API did not have data for the requested ID.");
    // }
    // if (recipes.status === 402) {
    //     return alert("Eeep, I am out of API credits");
    // }
    // console.log("Fetch has finished");
    // // let recipes = await new Promise(resolve => setTimeout(resolve, 1000));
    // let resultsJson = await recipes.json();
    // return resultsJson;
    return apiTestResult
}
