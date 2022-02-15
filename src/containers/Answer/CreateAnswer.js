import { Button, Input, Typography, Form } from "antd"
import AnswerService from "./AnswerService"

function CreateAnswer (props) {

    const [form] = Form.useForm()

    function onFinish(values) {      
        const survey_id = props.match.params.survey_id
        const question_id = props.match.params.question_id
        AnswerService
        .createAnswer(question_id, values)
        .then(res => {
            props.history.push(`/edit-survey/${survey_id}/edit-question/${question_id}/answers`)           
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <div style={{ width: '500px', border: '2px solid #000', borderRadius: '4px', background: '#fff', padding: '24px' }}>
                <Typography.Title level={4}>Add new answer</Typography.Title>
                <Form form={form} layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Name" name="answer" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>                    
                    <Button block type="primary" htmlType="submit">Submit</Button>
                </Form> 
            </div>
        </div>
    )
}

export default CreateAnswer