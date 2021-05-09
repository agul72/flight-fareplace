import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import {FlightPage} from "./pages/FlightPage";

export const useRoutes = () => {
    return (
        <Switch>
            <Route path='/list' component={FlightPage}/>
            <Redirect to={'/list'}/>
        </Switch>
    )
}
