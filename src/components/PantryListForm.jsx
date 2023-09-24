import React from "react";

export default class PantryListForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newItem: "",
        }
    }
    handleChangeInput = (event) => {
        this.setState({newItem: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.setParentState(event.target.name, this.state.newItem);
        // Clear the value field after submit
        this.setState({ newItem: "" });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* htmlFor instead of for, for the compiler */}
                <label htmlFor="item">Add item: </label>
                <input type="text" name="item" id="itemInput" placeholder="Enter item" value={this.state.newItem} onChange={this.handleChangeInput} />
                <button type="submit">Add</button>
            </form>
        );
    }
}
