import React from "react";

export default class RecipeDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.recipes) {
            let recipesToShow = this.props.recipes.map((recipe) => {
                let url = `https://spoonacular.com/recipes/${recipe.title.replaceAll(" ", "-")}-${recipe.id}`;
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
            });
            return <ul>{recipesToShow}</ul>;
        } else {
            return <div>Loading....</div>;
        }
    }
}
