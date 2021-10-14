import {Switch} from "react-router";
import {Link, useLocation} from "react-router-dom";

import PrivateRoute from "../utils/privateRoute";
import {Paths} from "../utils/paths";
import LogOut from "../components/LogOut";
import Users from "./Users";
import Homes from "./Homes";

const Home = () => {

    const location = useLocation();

    return(
        <>
            {(location.pathname !== Paths.users)?  <Link to={Paths.users}>
                <button className="btn btn-success m-3">USERS</button>
            </Link> : null}
            {(location.pathname !== Paths.homes)?  <Link to={Paths.homes}>
                <button className="btn btn-success m-3">HOMES</button>
            </Link> : null}
            <LogOut />

            <Switch>
                <PrivateRoute children={Users} exact path={Paths.users} />
                <PrivateRoute children={Homes} exact path={Paths.homes} />
            </Switch>
        </>
    );
}

export default Home;