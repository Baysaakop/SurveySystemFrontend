import { Button, Input, Typography, Form, Spin } from "antd"
import { useState, useEffect } from "react"
import SurveyService from "./SurveyService"

function UpdateSurvey (props) {

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
        .updateSurvey(survey.id, values)
        .then(res => {
            props.history.push("/surveys")           
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        survey ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                <div style={{ width: '600px', border: '2px solid #000', borderRadius: '4px', background: '#fff', padding: '24px' }}>
                    <Typography.Title level={4}>Update survey</Typography.Title>
                    <Form form={form} layout="vertical" onFinish={onFinish}>
                        <Form.Item label="Name" name="survey" rules={[{ required: true }]}>
                            <Input defaultValue={survey.survey} />
                        </Form.Item>
                        <Form.Item label="Description" name="description" rules={[{ required: true }]}>
                            <Input.TextArea rows={6} defaultValue={survey.description} />
                        </Form.Item>
                        <Button block type="primary" htmlType="submit">Submit</Button>
                    </Form> 
                    <div style={{ textAlign: 'center', marginTop: '8px' }}>
                        <Button href={`/questions?survey=${survey.id}`} type="link">Edit questions</Button>
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

export default UpdateSurvey