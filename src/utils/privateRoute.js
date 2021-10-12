import {Route, Redirect} from "react-router-dom";

import {Paths} from "./paths";
import {Storage} from "./classStorage";

const isAuth = () => Storage.get('accessToken')

const PrivateRoute = ({children: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isAuth()?
                <Component {...props} />
                : <Redirect to={Paths.logIn} />
        )} >
        </Route>
    );
};

export default PrivateRoute;