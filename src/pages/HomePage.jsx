import React from "react";
import PantryListDisplay from "../components/PantryListDisplay";
import PantryListForm from "../components/PantryListForm";
import RecipeDisplay from "../components/RecipeDisplay";
import { RecipeSearch } from "../components/RecipeSearch";

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listToShow: ["tomato", "onion", "bread"],
            apiKey: "3e06d892f3044bab8b766176ccd0e18c",
            recipes: [],
        };
    }

    updateState = (stateKeyId, newStateValue) => {
        this.setState({
            listToShow: [...this.state.listToShow, newStateValue],
        });
    };
    handleButtonClick = async () => {
        const recipes = await RecipeSearch(this.state.listToShow, this.state.apiKey);
        this.setState({ recipes });
    };
    render() {
        return (
            <div>
                <h1>Meal Mate</h1>
                <div className="mainSection">
                    <div className="PantryList">
                        <div>
                            <PantryListForm setParentState={this.updateState} />
                        </div>
                        <div id="pantryListDisplay">
                            <PantryListDisplay listToShow={this.state.listToShow} />
                        </div>
                    </div>
                    <div className="RecipeDisplay">
                        <button onClick={this.handleButtonClick}>Fetch recipes</button>
                        <RecipeDisplay listToShow={this.state.listToShow} api={this.state.apiKey} recipes={this.state.recipes} />
                    </div>
                </div>
            </div>
        );
    }
}
