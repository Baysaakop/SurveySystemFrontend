import { Button, Table, Space, Popconfirm } from 'antd';
import { useEffect, useState } from 'react';
import { BackwardOutlined, PlusCircleOutlined } from '@ant-design/icons/lib/icons';
import QuestionService from './QuestionService';

function QuestionList (props) {

    const [data, setData] = useState()
    const [survey, setSurvey] = useState()

    useEffect(() => {        
        getData()
    }, [])

    function getData() {        
        const survey_id = props.match.params.survey_id
        setSurvey(survey_id)
        QuestionService
        .getQuestions(survey_id)
        .then(res => {
            console.log(res.data)
            setData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    function onDelete(id) {
        QuestionService
        .deleteQuestion(id)
        .then(res => {
            getData()
        })
        .catch(err => {
            console.log(err)
        })
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Question',
            dataIndex: 'question',
            key: 'question',
        },
        {
            title: 'Action',            
            dataIndex: 'id',
            key: 'action',
            render: (id) => (
                <Space size="middle">                    
                    <Button type='dashed' href={`/edit-survey/${survey}/edit-question/${id}`}>Update</Button>
                    <Popconfirm title="Are you sure to delete this question?" onConfirm={() => onDelete(id)}>
                        <Button danger type='dashed'>Delete</Button>
                    </Popconfirm>
                </Space>
            )
        },
    ]

    return (
        <div>
            <Button 
                href={`/edit-survey/${survey}/add-question`}
                type='primary' 
                icon={<PlusCircleOutlined />} 
                style={{ marginBottom: '16px', background: 'purple', border: 0 }}
            >
                Add Question
            </Button>
            <Table dataSource={data} columns={columns} />
            <Button icon={<BackwardOutlined />} href="/surveys" style={{ marginTop: '24px' }}>Go back to surveys</Button>
        </div>
    )
}

export default QuestionList