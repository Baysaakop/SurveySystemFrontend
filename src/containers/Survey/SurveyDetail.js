import { Button, Input, Steps, Typography } from "antd";
import { useEffect, useState } from "react"
import './SurveyDetail.css'

function SurveyDetail (props) {

    const [survey, setSurvey] = useState()

    useEffect(() => {
        const id = props.match.params.id;
        setSurvey(id)        
    }, [props.match])

    return (
        <div className="survey">                   
            <div className="steps">
                <Steps size="small" current={1}>
                    <Steps.Step title="Finished" />
                    <Steps.Step title="In Progress" />
                    <Steps.Step title="Waiting" />
                    <Steps.Step title="Waiting" />
                    <Steps.Step title="Waiting" />
                    <Steps.Step title="Waiting" />
                    <Steps.Step title="Waiting" />                    
                </Steps>
            </div>
            <div className="survey-head">
                <Typography.Title level={3}>
                    Survey {survey}
                </Typography.Title>
                <Typography.Title level={5}>
                    Pellentesque vitae tincidunt elit. Phasellus in quam urna. Nulla a feugiat nunc. Morbi ac mauris tortor. Morbi nec tincidunt est.
                </Typography.Title>
            </div>  
            <div className="survey-body">
                <Typography.Title level={5}>
                    1. Please enter your e-mail to continue.
                    <Input style={{ margin: '16px 0' }} />
                    <Button type="primary">Next</Button>
                </Typography.Title>
            </div>   
        </div>
    )
}

export default SurveyDetail