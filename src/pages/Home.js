import {Switch} from "react-router";

import PrivateRoute from "../utils/privateRoute";
import {Paths} from "../utils/paths";
import LogOut from "../utils/LogOut";
import Users from "./Users";
import EditUser from "./EditUser";

const Home = () => {

    return(
        <>
            <LogOut />

            <Switch>
                <PrivateRoute children={Users} exact path={Paths.users} />
                <PrivateRoute children={EditUser} exact path={Paths.editUser} />
            </Switch>
        </>
    );
}

export default Home;