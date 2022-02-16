import { useEffect, useState } from "react";
import SurveyService from "./SurveyService";

function SurveyResult (props) {
    const [data, setData] = useState()
    const [survey, setSurvey] = useState()

    useEffect(() => {        
        getData()
    }, [])

    function getData() {
        const survey_id = props.match.params.survey_id
        setSurvey(survey_id)
        SurveyService
        .getUserResponses(survey_id)
        .then(res => {
            console.log(res.data)
            setData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>

        </div>
    )
}

export default SurveyResult;