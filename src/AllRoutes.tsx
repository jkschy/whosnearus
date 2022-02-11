import {RouteObject} from "react-router-dom";
import PersistentLogin from "./components/routing/PersistentLogin";
import UserCard from "./components/auth/UserCard";
import AuthCard from "./components/auth/AuthCard";
import HomePage from "./components/home/HomePage";
import Logout from "./components/auth/Logout";

export default class allRoutes {
    public allRoutes: RouteObject[] = [];
    private readonly routeMap: RouteMap[] = [
        {
            path: '/user',
            element: <UserCard/>
        },
        {
            path: '/',
            element: <AuthCard/>
        },
        {
            path: '/signIn',
            element: <AuthCard/>
        },
        {
            path: '/signUp',
            element: <AuthCard signUp/>
        },
        {
            path: '/home',
            element: <HomePage/>
        },
        {
            path: '/Logout',
            element: <Logout/>
        }

    ]

    constructor() {
        this.allRoutes.push({
            path: '*',
            element: <PersistentLogin/>
        })
    }

    addRoute(path: string, element?: JSX.Element): allRoutes {
        if (!element && this.routeMap.filter(route => route.path === path).length > 0) {
            element = this.routeMap.filter(route => route.path === path)[0].element;
        } else if (!element) {
            element = <h1>Error 404</h1>
        }
        this.allRoutes.push({
            path: path,
            element: element
        })
        return this;
    }
}

interface RouteMap {
    path: string,
    element: JSX.Element,
}