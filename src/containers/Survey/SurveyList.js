import { List, Button, Card } from 'antd';
import { Link } from 'react-router-dom';

function SurveyList () {

    const data = [
        {
            id: 1,
            title: 'Survey 1',
        },
        {
            id: 2,
            title: 'Survey 2',
        },
        {
            id: 3,
            title: 'Survey 3',
        },
        {
            id: 4,
            title: 'Survey 4',
        },
    ];

    return (
        <div>
            <List
                grid={{ gutter: 40, column: 4 }}
                dataSource={data}
                renderItem={item => (
                <List.Item>                  
                    <Link to={`/surveys/${item.id}`}>
                      <Card>
                        {item.title}
                      </Card>
                    </Link>                    
                </List.Item>
                )}
            />
        </div>
    )
}

export default SurveyList