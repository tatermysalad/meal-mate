import { config } from 'dotenv'

export async function RecipeSearch(ingredients) {
    let ingredientsString = ingredients.toString()
    let recipes = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.API_KEY}&ingredients=${ingredientsString}&ranking=2&number=5`)
    let resultsJson = await recipes.json()
    return resultsJson

}
