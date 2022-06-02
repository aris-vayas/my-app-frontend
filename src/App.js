import "./App.css";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";
import Ingredient from "./Ingredient";
import NewRecipe from "./NewRecipe";
import NavBar from "./NavBar";
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/Ingredient">
          <Ingredient />
        </Route>
        <Route path="/NewRecipe">
          <NewRecipe />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
