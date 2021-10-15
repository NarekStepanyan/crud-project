import {Route, Redirect} from "react-router-dom";

import {Paths} from "./paths";
import {Storage} from "./classStorage";

const isAuth = () => Storage.get('accessToken')

const PrivateRoute = ({render, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isAuth()?
                render()
                : <Redirect to={Paths.logIn} />
        )} >
        </Route>
    );
};

export default PrivateRoute;