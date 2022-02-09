import React from 'react';
import './Home.css';
import SurveyList from './Survey/SurveyList';

function Home (props) {        

    return (
        <div className='home'>                      
            <SurveyList />   
        </div>
    )
}

export default Home;