import { RecipeSearch } from "./RecipeSearch";
import React from "react";

export default class RecipeDisplay extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        if (this.props.recipes) {
            let recipesToShow = this.props.recipes.map((recipe) => (
                <li key={recipe.id}>
                    <h2>{recipe.title}</h2>
                    <img src={recipe.image} alt={recipe.title}></img><br></br>
                    <button>Open Recipe</button>
                </li>
            ));
            return <ul>{recipesToShow}</ul>;
        } else {
            return <div>Loading....</div>;
        }
    }
}
