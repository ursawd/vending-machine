import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Chips from "./Chips";
import Candy from "./Candy";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <VendingMachine />
          </Route>
          <Route path="/soda" exact>
            <Soda />
          </Route>
          <Route path="/chips" exact>
            <Chips />
          </Route>
          <Route path="/candy" exact>
            <Candy />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
