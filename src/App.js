import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import {Paths} from "./utils/paths";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path={Paths.logIn}>
                    <LogIn />
                </Route>
                <Route path={Paths.home}>
                    <Home />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
