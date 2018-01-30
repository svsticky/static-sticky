import React from 'react';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import '../css/index.scss';


export default ({ children }) => (
    <div>
        NAVBAR
        <Container>
            {children()}
        </Container>
        FOOTER
    </div>
);