import React from "react";
import PantryListForm from "./PantryListForm";

export default class PantryListDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listToShow: ["tomato", "onion"],
        };
    }

    addItemToList = (newItem) => {
        this.setState((prevState) => ({
            listToShow: [...prevState.listToShow, newItem]
        }))
    }
    render() {
        let listOfItems = this.state.listToShow.map((item, index) => (
            <li key={index}>{item}</li>
        ))
        return (
            <div>
                <h4>Pantry List</h4>
                <ul>{listOfItems}</ul>
                <PantryListForm onAddItem={this.addItemToList} />
            </div>
        );
    }
}
