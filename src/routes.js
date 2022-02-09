import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import SurveyDetail from './containers/Survey/SurveyDetail';

function BaseRouter () {
    return (
        <Switch>
            <Route exact path="/" component={Home} />             
            <Route exact path="/surveys/:id" component={SurveyDetail} />       
        </Switch>
    )    
}
export default BaseRouter;