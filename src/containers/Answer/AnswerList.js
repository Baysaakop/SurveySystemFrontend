import { Button, Table, Space, Popconfirm } from 'antd';
import { useEffect, useState } from 'react';
import { BackwardOutlined, PlusCircleOutlined } from '@ant-design/icons/lib/icons';
import AnswerService from './AnswerService';

function AnswerList (props) {

    const [data, setData] = useState()
    const [question, setQuestion] = useState()

    useEffect(() => {        
        getData()
    }, [])

    function getData() {        
        console.log(props)
        const question_id = props.match.params.question_id
        setQuestion(question_id)
        AnswerService
        .getAnswers(question_id)
        .then(res => {
            console.log(res.data)
            setData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    function onDelete(id) {
        AnswerService
        .deleteAnswer(id)
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
            title: 'Answer',
            dataIndex: 'answer',
            key: 'answer',
        },
        {
            title: 'Action',            
            dataIndex: 'id',
            key: 'action',
            render: (id) => (
                <Space size="middle">                    
                    <Button type='dashed' href={`/edit-survey/${props.match.params.survey_id}/edit-question/${props.match.params.question_id}/edit-answer/${id}`}>Update</Button>
                    <Popconfirm title="Are you sure to delete this answer?" onConfirm={() => onDelete(id)}>
                        <Button danger type='dashed'>Delete</Button>
                    </Popconfirm>
                </Space>
            )
        },
    ]

    return (
        <div>
            <Button 
                href={`/edit-survey/${props.match.params.survey_id}/edit-question/${question}/add-answer`}
                type='primary' 
                icon={<PlusCircleOutlined />} 
                style={{ marginBottom: '16px', background: 'purple', border: 0 }}
            >
                Add Answer
            </Button>
            <Table dataSource={data} columns={columns} />
            <Button icon={<BackwardOutlined />} href={`/edit-survey/${props.match.params.survey_id}/questions`} style={{ marginTop: '24px' }}>Go back to questions</Button>
        </div>
    )
}

export default AnswerList