import { Button, Table, Space } from 'antd';
import { useEffect, useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons/lib/icons';
import QuestionService from './QuestionService';

function QuestionList (props) {

    const [data, setData] = useState()

    useEffect(() => {        
        getData()
    }, [])

    function getData() {
        const queryParams = new URLSearchParams(props.location.search)
        const survey_id = queryParams.get("survey")
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
                    <Button type='dashed' href={`/edit-question/${id}`}>Update</Button>
                    <Button danger type='dashed'>Delete</Button>
                </Space>
            )
        },
    ]

    return (
        <div>
            <Button 
                href='/add-question'
                type='primary' 
                icon={<PlusCircleOutlined />} 
                style={{ marginBottom: '16px', background: 'purple', border: 0 }}
            >
                Add Question
            </Button>
            <Table dataSource={data} columns={columns} />
        </div>
    )
}

export default QuestionList