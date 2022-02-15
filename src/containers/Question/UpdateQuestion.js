import { BackwardOutlined } from "@ant-design/icons/lib/icons"
import { Button, Input, Typography, Form, Spin } from "antd"
import { useState, useEffect } from "react"
import QuestionService from "./QuestionService"

function UpdateQuestion (props) {

    const [form] = Form.useForm()
    const [question, setQuestion] = useState()    

    useEffect(() => {                
        getQuestion()        
    }, [props.match])

    function getQuestion() {
        const id = props.match.params.id;
        QuestionService
        .getQuestionById(id)
        .then(res => {             
            setQuestion(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    function onFinish(values) {                
        const survey_id = props.match.params.survey_id
        QuestionService
        .updateQuestion(question.id, values)
        .then(res => {
            props.history.push(`/edit-survey/${survey_id}/questions`)            
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        question ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                <div style={{ width: '600px', border: '2px solid #000', borderRadius: '4px', background: '#fff', padding: '24px' }}>
                    <Typography.Title level={4}>Update question</Typography.Title>
                    <Form form={form} layout="vertical" onFinish={onFinish}>
                        <Form.Item label="Name" name="question" rules={[{ required: true }]}>
                            <Input defaultValue={question.question} />
                        </Form.Item>
                        <Button block type="primary" htmlType="submit">Submit</Button>
                    </Form> 
                    <div style={{ textAlign: 'center', marginTop: '8px' }}>
                        <Button href={`/edit-survey/${props.match.params.survey_id}/edit-question/${question.id}/answers`} type="link">Edit answers</Button>
                    </div>                    
                </div>
            </div>
        ) : (
            <div style={{ width: '100%', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Spin />
            </div>
        )
    )
}

export default UpdateQuestion