export default function PantryListDisplay(props) {
    let listOfItems = props.listToShow.map((value, index) => (
        <li key={index} onClick={() => props.onItemRemove(value)}>
            {value}
        </li>
    ));

    return (
        <div>
            <h4>Pantry List</h4>
            <ul>{listOfItems}</ul>
        </div>
    );
}
