import PrivateRoute from "../utils/privateRoute";

export default function RouteWithSubRoutes(route) {
    return (
        route.private? (
            <PrivateRoute
                path={route.path}
                render={props => (
                    <route.component {...props} routes={route.routes} />
                )}
            />
        ): <route.component routes={route.routes}/>
    );
}