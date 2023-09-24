import React from "react";
import PantryListDisplay from "../components/PantryListDisplay";
import PantryListForm from "../components/PantryListForm";
import RecipeDisplay from "../components/RecipeDisplay";
import { RecipeSearch } from "../components/RecipeSearch";
import logo from "../img/meal_mate.png"

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
        if (Object.values(this.state.listToShow).includes(newStateValue)) {
            alert(`${newStateValue} already exists`);
        } else {
            this.setState({
                listToShow: [...this.state.listToShow, newStateValue],
            });
        }
    };
    handleButtonClick = async () => {
        const recipes = await RecipeSearch(this.state.listToShow, this.state.apiKey);
        this.setState({ recipes });
    };

    handleItemRemove = (itemToRemove) => {
        const updatedList = this.state.listToShow.filter((item) => item !== itemToRemove);

        this.setState({listToShow: updatedList})
    }
    render() {
        return (
            <div>
                <img src={logo} alt="Meal Mate Logo" id="logo" />
                <div className="mainSection">
                    <div className="PantryList">
                        <div>
                            <PantryListForm setParentState={this.updateState} />
                        </div>
                        <div id="pantryListDisplay">
                            <PantryListDisplay listToShow={this.state.listToShow} onItemRemove={this.handleItemRemove} />
                        </div>
                        <button onClick={this.handleButtonClick}>Fetch recipes</button>
                    </div>
                    <div className="RecipeDisplay">
                        <RecipeDisplay listToShow={this.state.listToShow} api={this.state.apiKey} recipes={this.state.recipes} />
                    </div>
                </div>
            </div>
        );
    }
}
