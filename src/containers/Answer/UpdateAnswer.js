import { Button, Input, Typography, Form, Spin } from "antd"
import { useState, useEffect } from "react"
import AnswerService from "./AnswerService"

function UpdateAnswer (props) {

    const [form] = Form.useForm()
    const [answer, setAnswer] = useState()    

    useEffect(() => {                
        getAnswer()        
    }, [props.match])

    function getAnswer() {
        const id = props.match.params.id;
        AnswerService
        .getAnswerById(id)
        .then(res => {             
            setAnswer(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    function onFinish(values) {                
        const survey_id = props.match.params.survey_id
        const question_id = props.match.params.question_id
        AnswerService
        .updateAnswer(answer.id, values)
        .then(res => {
            props.history.push(`/edit-survey/${survey_id}/edit-question/${question_id}/answers`)            
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        answer ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                <div style={{ width: '600px', border: '2px solid #000', borderRadius: '4px', background: '#fff', padding: '24px' }}>
                    <Typography.Title level={4}>Update answer</Typography.Title>
                    <Form form={form} layout="vertical" onFinish={onFinish}>
                        <Form.Item label="Name" name="answer" rules={[{ required: true }]}>
                            <Input defaultValue={answer.answer} />
                        </Form.Item>
                        <Button block type="primary" htmlType="submit">Submit</Button>
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

export default UpdateAnswer