import { Button, Input, Typography, Form } from "antd"
import SurveyService from "./SurveyService"

function CreateSurvey (props) {

    const [form] = Form.useForm()

    function onFinish(values) {        
        SurveyService
        .createSurvey(values)
        .then(res => {
            props.history.push("/surveys")           
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <div style={{ width: '500px', border: '2px solid #000', borderRadius: '4px', background: '#fff', padding: '24px' }}>
                <Typography.Title level={4}>Add new survey</Typography.Title>
                <Form form={form} layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Name" name="survey" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Description" name="description" rules={[{ required: true }]}>
                        <Input.TextArea rows={6} />
                    </Form.Item>
                    <Button block type="primary" htmlType="submit">Submit</Button>
                </Form> 
            </div>
        </div>
    )
}

export default CreateSurvey