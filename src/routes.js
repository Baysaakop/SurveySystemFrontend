import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AnswerList from './containers/Answer/AnswerList';
import CreateAnswer from './containers/Answer/CreateAnswer';
import UpdateAnswer from './containers/Answer/UpdateAnswer';
import Home from './containers/Home';
import CreateQuestion from './containers/Question/CreateQuestion';
import QuestionList from './containers/Question/QuestionList';
import UpdateQuestion from './containers/Question/UpdateQuestion';
import AfterSurvey from './containers/Survey/AfterSurvey';
import CreateSurvey from './containers/Survey/CreateSurvey';
import SurveyDetail from './containers/Survey/SurveyDetail';
import SurveyList from './containers/Survey/SurveyList';
import SurveyResult from './containers/Survey/SurveyResult';
import UpdateSurvey from './containers/Survey/UpdateSurvey';

function BaseRouter () {
    return (
        <Switch>
            <Route exact path="/" component={Home} />             
            
            <Route exact path="/surveys" component={SurveyList} />             
            <Route exact path="/surveys/:id" component={SurveyDetail} />       
            <Route exact path="/add-survey" component={CreateSurvey} />       
            <Route exact path="/edit-survey/:id" component={UpdateSurvey} />   

            <Route exact path="/results/:survey_id" component={SurveyResult} />           

            <Route exact path="/thanks" component={AfterSurvey} />

            <Route exact path="/edit-survey/:survey_id/questions" component={QuestionList} />    
            <Route exact path="/edit-survey/:survey_id/add-question" component={CreateQuestion} />      
            <Route exact path="/edit-survey/:survey_id/edit-question/:id" component={UpdateQuestion} />            

            <Route exact path="/edit-survey/:survey_id/edit-question/:question_id/answers" component={AnswerList} />    
            <Route exact path="/edit-survey/:survey_id/edit-question/:question_id/add-answer" component={CreateAnswer} />    
            <Route exact path="/edit-survey/:survey_id/edit-question/:question_id/edit-answer/:id" component={UpdateAnswer} />    
        </Switch>
    )    
}
export default BaseRouter;