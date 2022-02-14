import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import QuestionList from './containers/Question/QuestionList';
import CreateSurvey from './containers/Survey/CreateSurvey';
import SurveyDetail from './containers/Survey/SurveyDetail';
import SurveyList from './containers/Survey/SurveyList';
import UpdateSurvey from './containers/Survey/UpdateSurvey';

function BaseRouter () {
    return (
        <Switch>
            <Route exact path="/" component={Home} />             
            
            <Route exact path="/surveys" component={SurveyList} />             
            <Route exact path="/surveys/:id" component={SurveyDetail} />       
            <Route exact path="/add-survey" component={CreateSurvey} />       
            <Route exact path="/edit-survey/:id" component={UpdateSurvey} />       

            <Route exact path="/questions" component={QuestionList} />             
        </Switch>
    )    
}
export default BaseRouter;