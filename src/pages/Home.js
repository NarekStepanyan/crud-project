import {Switch} from "react-router";
import {Link, useLocation} from "react-router-dom";

import {Paths} from "../utils/paths";
import LogOut from "../components/LogOut";
import RouteWithSubRoutes from "../components/RouteWithSubRoutes";

const Home = ({ routes }) => {

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
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </>
    );
}

export default Home;