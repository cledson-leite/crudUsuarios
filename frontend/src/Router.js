import React from 'react'
import { Switch, Route, Redirect } from "react-router";

import HomeApp from "./components/Home";
import UserCrud from './components/UserCrud/UserCrud';

function Router() {
    return (
        <Switch>
            <Route exact path = '/' component = {HomeApp} />
            <Route path = '/users' component = {UserCrud} />
            <Redirect from = '*' to = '/' />
        </Switch>
    )
}

export default Router
