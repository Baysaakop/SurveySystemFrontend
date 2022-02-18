import { Col, Progress, Row, Spin, Typography } from "antd";
import { useEffect, useState } from "react";
import SurveyService from "./SurveyService";

function SurveyResult (props) {
    const [survey, setSurvey] = useState()

    useEffect(() => {        
        getData()
    }, [])

    function getData() {
        const survey_id = props.match.params.survey_id        
        SurveyService
        .getSurveyById(survey_id)
        .then(res => {
            console.log(res.data)
            setSurvey(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    function getTotalAnswer(answer_id, question_id) {
        let count = 0
        survey.userResponses.forEach(userResponse => {
            userResponse.responses.forEach(response => {
                if (response.question.id === question_id) {
                    if (response.answer.id === answer_id) {
                        count++
                    }
                }
            })
        });
        return count
    }

    function getPercentage(answer_id, question_id) {
        let answers_count = getTotalAnswer(answer_id, question_id)
        let percent = (answers_count / survey.userResponses.length) * 100
        console.log(percent)
        return percent        
    }

    return (
        survey ? (
            <div>
                <Typography.Title level={4}>
                    Result of survey: {survey.survey}
                </Typography.Title>
                <Typography.Text>
                    {survey.description}
                </Typography.Text>
                <Row gutter={16}>                                        
                    {survey.questions.map(question => (
                        <Col span={8} style={{ marginTop: '16px' }}>
                            <div style={{ background: '#fff', padding: '16px' }}>
                                <Typography.Title level={5}>
                                    {question.question}
                                </Typography.Title>
                                {question.answers.map(answer => (
                                    <div>                                        
                                        <Typography.Text>
                                            {answer.answer}
                                        </Typography.Text>
                                        <Progress 
                                            percent={getPercentage(answer.id, question.id)} 
                                            format={() => getTotalAnswer(answer.id, question.id)} 
                                        />
                                    </div>
                                ))}
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        ) : (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <Spin />
            </div>
        )        
    )
}

export default SurveyResult;