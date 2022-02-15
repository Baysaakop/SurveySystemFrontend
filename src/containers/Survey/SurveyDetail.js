import { Button, message, Radio, Space, Spin, Steps, Typography } from "antd";
import { useEffect, useState } from "react"
import './SurveyDetail.css'
import SurveyService from "./SurveyService";

function SurveyDetail (props) {
    const [step, setStep] = useState(0)
    const [survey, setSurvey] = useState()    
    const [responses, setResponses] = useState([])

    useEffect(() => {        
        getSurvey()        
    }, [props.match])

    function getSurvey() {
        const id = props.match.params.id;
        SurveyService
        .getSurveyById(id)
        .then(res => {
            console.log(res.data)            
            setSurvey(res.data)            
        })
        .catch(err => {
            console.log(err)
        })
    }

    function onStart() {
        survey.questions.forEach(q => {
            const row = {
                question: q.id,
                answer: undefined
            }
            responses.push(row)
        });
        setStep(1)
    }

    function onNext() {
        const item = responses.find(x => x.question === survey.questions[step - 1].id) 
        if (item.answer === undefined) {
            message.error("You must choose your answer to continue.")
            return;
        }
        setStep(step + 1)
    }

    function onPrev() {
        setStep(step - 1)
    }

    function onFinish() {
        const data = {
            email: 'baysaakop@gmail.com'            
        }
        SurveyService
        .createUserResponse(survey.id, data)
        .then(res => {
            console.log(res)            
        })
        .catch(err => {
            console.log(err)
        })
    }

    function getStatus(num) {
        if (step > num) {
            return "Finished"
        } else if (step === num) {
            return "In Progress"
        } else {
            return "Waiting"
        }
    }

    function getIndex(q) {
        return survey.questions.indexOf(q)
    }

    function onSelectAnswer(e) {        
        const item = responses.find(x => x.question === survey.questions[step - 1].id) 
        item.answer = e.target.value         
        console.log(responses)       
    }

    function getSelectedAnswer() {
        const item = responses.find(x => x.question === survey.questions[step - 1].id) 
        return item.answer
    }

    return (        
        survey ? (
            <div className="survey">                   
                <div className="steps">
                    <Steps size="small" current={step - 1}>
                        {survey.questions.map(q => (
                            <Steps.Step title={getStatus(getIndex(q) + 1)} />    
                        ))}                                 
                    </Steps>
                </div>
                <div className="body">
                    { step === 0 ?
                        <div className="question">
                            <Typography.Title level={3}>
                                {survey.survey}
                            </Typography.Title>
                            <Typography.Title level={5}>
                                {survey.description}
                            </Typography.Title>
                            <div style={{ textAlign: 'center', marginTop: '24px' }}>
                                <Button 
                                    type="primary" 
                                    size="large" 
                                    style={{ margin: 'auto' }}
                                    onClick={onStart}
                                >
                                    Start survey
                                </Button>
                            </div>
                        </div>  
                    : 
                        <div className="question">
                            <Typography.Title level={4}>
                                {step}. {survey.questions[step - 1].question}
                            </Typography.Title>
                            <Radio.Group defaultValue={getSelectedAnswer} onChange={onSelectAnswer}>
                                <Space direction="vertical">
                                    {survey.questions[step - 1].answers.map(answer => (
                                        <Radio value={answer.id}>
                                            {answer.answer}
                                        </Radio>
                                    ))}
                                </Space>
                            </Radio.Group>                            
                            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Button 
                                    type="ghost"
                                    size="large" 
                                    onClick={onPrev}
                                >
                                    Prev
                                </Button>
                                <Button 
                                    type="primary" 
                                    size="large" 
                                    onClick={onNext}
                                >
                                    Next
                                </Button>
                                <Button 
                                    type="primary" 
                                    size="large" 
                                    onClick={onFinish}
                                >
                                    FINISH
                                </Button>
                            </div>
                        </div>
                    }           
                </div>     
                {/* <div className="survey-body">
                    <Typography.Title level={5}>
                        1. Please enter your e-mail to continue.
                        <Input style={{ margin: '16px 0' }} />
                        <Button type="primary">Next</Button>
                    </Typography.Title>
                </div>    */}
            </div>
        ) : (
            <div style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Spin />
            </div>
        )     
    )
}

export default SurveyDetail