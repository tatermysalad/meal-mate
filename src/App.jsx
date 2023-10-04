import "./App.css";
import "./styles/NavBar.css";
import HomePage from "./pages/HomePage";
import RecipeProvider from "./context/RecipeContext";

function App() {
    return (
        <RecipeProvider>
            <HomePage />
        </RecipeProvider>
    );
}

export default App;
