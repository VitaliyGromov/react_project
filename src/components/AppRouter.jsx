import React from 'react';
import {Route, Routes, redirect} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import LoginPage from "./LoginPage";

const AppRouter = () => {
    const isAuth = false;
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} element={route.element} exact={route.exact}>
                    </Route>
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={route.element} exact={route.exact}>
                    </Route>
                )}
            </Routes>
    );
};

export default AppRouter;