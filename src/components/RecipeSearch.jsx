import { apiTestResult } from "./TestingData"

export async function RecipeSearch(ingredients, api) {
    let ingredientsString = ingredients.toString()
    // let recipes = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${api}&ingredients=${ingredientsString}&ranking=2&number=5`)
    let recipes = await new Promise(resolve => setTimeout(resolve, 1000)); 
    // let resultsJson = await recipes.json()
    return apiTestResult // resultsJson

}
