import React, { useState } from "react";
import PantryListDisplay from "../components/PantryListDisplay";
import PantryListForm from "../components/PantryListForm";


export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listToShow: ["tomato", "onion", "bread"],
        };
    }

    updateState = (stateKeyId, newStateValue) => {
        this.setState({
            listToShow: [...this.state.listToShow, newStateValue]
        })
    }

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <body className="mainSection">
                    <div className="PantryList">
                        <div>
                            <PantryListForm setParentState={this.updateState} />
                        </div>
                        <div id="pantryListDisplay">
                            <PantryListDisplay listToShow={this.state.listToShow} />
                        </div>
                    </div>
                </body>
            </div>
        );
    }
}
