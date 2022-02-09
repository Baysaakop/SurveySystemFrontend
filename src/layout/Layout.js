import React from 'react';
import { Layout } from 'antd';
import CustomMenu from '../components/Menu';
import './Layout.css';

const { Header, Content, Footer } = Layout;

function CustomLayout (props) {            

    return(
        <Layout style={{ padding: 0, margin: 0 }}>
            <Header className="header">
                <CustomMenu {...props} />                
            </Header>
            <Content className="content">                                     
                <div className="content-item">                    
                    {props.children} 
                </div>                                
            </Content>
            <Footer className="footer">                
            © 2021 Footer. All Rights Reserved.
            </Footer>
        </Layout>
    );  
};

export default CustomLayout;