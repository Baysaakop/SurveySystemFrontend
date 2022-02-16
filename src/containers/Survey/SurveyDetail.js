import { Button, message, Radio, Spin, Typography, Form, Input, Popconfirm } from "antd";
import { useEffect, useState } from "react"
import './SurveyDetail.css'
import SurveyService from "./SurveyService";

function SurveyDetail (props) {
    const [form] = Form.useForm()
    const [survey, setSurvey] = useState()    

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

    function onFinish(values) {                
        SurveyService
        .createUserResponse(survey.id, values)
        .then(res => {
            console.log(res)             
            if (res.data === "") {
                message.error("Response with this email has already submitted. Please enter new email.")
            } else {
                props.history.push("/thanks")
            }            
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (        
        survey ? (
            <div className="survey">       
                <div className="head">
                    <Typography.Title level={4}>
                        {survey.survey}
                    </Typography.Title>    
                    <Typography.Text>
                        {survey.description}
                    </Typography.Text>  
                </div>                      
                <div className="form">
                    <Form form={form} layout="vertical" onFinish={onFinish}>
                        <Form.Item 
                            name="email" 
                            label="E-mail" 
                            rules={[
                                { 
                                    type: 'email', 
                                    message: 'The input is not valid E-mail!' 
                                },
                                {
                                    required: true, 
                                    message: 'Please input your e-mail!' 
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        {survey.questions.map(q => (
                            <Form.Item name={q.id} label={q.question} rules={[{ required: true, message: 'Please select your answer!' }]}>
                                <Radio.Group defaultValue={undefined}>
                                    {q.answers.map(a => (
                                        <Radio value={a.id}>
                                            {a.answer}
                                        </Radio>
                                    ))}
                                </Radio.Group>
                            </Form.Item>
                        ))}
                        <Popconfirm title="Are you sure to submit?" onConfirm={form.submit}>
                            <Button block type="primary" htmlType="submit">Submit</Button>
                        </Popconfirm>
                    </Form>
                </div>                           
            </div>
        ) : (
            <div style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Spin />
            </div>
        )     
    )
}

export default SurveyDetail