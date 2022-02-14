import { Button, Table, Space } from 'antd';
import { useEffect, useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons/lib/icons';
import SurveyService from './SurveyService';

function SurveyList () {

    const [data, setData] = useState()

    useEffect(() => {
        getData()
    }, [])

    function getData() {
        SurveyService
        .getSurveys()
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
            title: 'Survey',
            dataIndex: 'survey',
            key: 'survey',
        },
        {
            title: 'Participants',
            dataIndex: 'participants',
            key: 'participants',
        },
        {
            title: 'Action',            
            dataIndex: 'id',
            key: 'action',
            render: (id) => (
                <Space size="middle">
                    <Button type='primary' href={`/surveys/${id}`}>Participate</Button>
                    <Button type='dashed' href={`/edit-survey/${id}`}>Update</Button>
                    <Button danger type='dashed'>Delete</Button>
                </Space>
            )
        },
    ]

    return (
        <div>
            <Button 
                href='/add-survey'
                type='primary' 
                icon={<PlusCircleOutlined />} 
                style={{ marginBottom: '16px', background: 'purple', border: 0 }}
            >
                Add Survey
            </Button>
            <Table dataSource={data} columns={columns} />
        </div>
    )
}

export default SurveyList