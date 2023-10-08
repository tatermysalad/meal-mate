import { RecipeContext } from "../context/RecipeContext";
import { useEffect, useContext, useState } from "react";

export default function RecipeDisplay() {
    const { recipes, setRecipes } = useContext(RecipeContext);

    return (
        <div>
            {console.log(recipes)}
            {recipes.length > 0 && (
                <ul>
                    {recipes.map((recipe) => {
                        const url = `https://spoonacular.com/recipes/${recipe.title.replaceAll(" ", "-")}-${recipe.id}`;
                        return (
                            <li key={recipe.id}>
                                <a href={url}>
                                    <h2>{recipe.title}</h2>
                                </a>
                                <img src={recipe.image} alt={recipe.title}></img>
                                <p>Used Ingredients: {recipe.usedIngredientCount}</p>
                                <p>Needed Ingredients: {recipe.missedIngredientCount}</p>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
