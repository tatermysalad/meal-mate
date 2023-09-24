export default function PantryListDisplay(props) {
    let listOfItems = props.listToShow.map((value, index) => (
        <li key={index} onClick={() => props.onItemRemove(value)}>
            {value}
        </li>
    ));

    return (
        <div>
            <h3>Pantry List</h3>
            <ul>{listOfItems}</ul>
        </div>
    );
}
