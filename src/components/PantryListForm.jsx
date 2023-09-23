import React from "react";

export default class PantryListForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newItem:"",
        }
    }

    handleChangeInput = (event) => {
        this.setState({newItem: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAddItem(this.state.newItem);
        this.setState({newItem:""})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* htmlFor instead of for, for the compiler */}
                <label htmlFor="item">Item here:</label>
                <input type="text" name="item" id="itemInput" placeholder="Enter an item to add to the list" value={this.state.newItem} onChange={this.handleChangeInput} />
                <button type="submit">Add</button>
            </form>
        );
    }
}
