import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './Menu.css'

function CustomMenu (props) {    
    return (                                  
        <div className='menu'>
            <div className='logo'>
                <Link to='/surveys'>
                    <Button type='primary' size='large'>E-SURVEY</Button>
                </Link>
            </div>
        </div>                                    
    )
}

export default CustomMenu;