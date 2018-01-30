import React from 'react';
import Link from 'gatsby-link';
import { Container, Menu } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import '../css/index.scss';


export default ({ children }) => (
    <div>
        <Menu size='large' fixed='top'>
            <Link to='/'>
                <Menu.Item name='Home'/>
            </Link>
            <Link to='/vacatures'>
                <Menu.Item name='Vacatures'/>
            </Link>
        </Menu>
        <Container>
            {children()}
        </Container>
    </div>
);