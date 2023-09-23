import { RecipeSearch } from "../components/RecipeSearch";
import PantryListDisplay from "../components/PantryListDisplay";

export default function HomePage(props) {
    return (
        <div>
            <h1>Home Page</h1>
            <body>
                <div id="pantryList">
                    <PantryListDisplay />
                </div>
                <div id="searchView">
                    
                </div>
            </body>
        </div>
    );
}
