import './App.css';
import {
    BrowserRouter as Router, Redirect, Route,
    Switch
} from "react-router-dom";

import {Routes} from "./utils/paths";
import RouteWithSubRoutes from "./components/RouteWithSubRoutes";

function App() {

  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/" component={() => (<Redirect to='/home' />)} />
                {Routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </Router>
    </div>
  );
}

export default App;
