import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

import {Paths} from "./utils/paths";
import LogIn from "./pages/authentication/LogIn";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path={Paths.logIn}>
                    <LogIn />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
