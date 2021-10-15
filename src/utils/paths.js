import LogIn from "../pages/LogIn";
import Home from "../pages/Home";
import Homes from "../pages/Homes";
import Users from "../pages/Users";

export const Routes = [

    {
        path: "/login",
        component: LogIn,
        private: false,
    },
    {
        path: "/home",
        component: Home,
        private: true,
        routes: [
            {
                path: "/home/homes",
                component: Homes,
                private: true,
            },
            {
                path: "/home/users",
                component: Users,
                private: true,
            }
        ]
    }
];

export const Paths = {
    initial: "/",
    logIn: "/login",
    home: "/home",
    users: "/home/users",
    homes: "/home/homes",
};