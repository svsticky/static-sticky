import React from 'react';
import Radium from 'radium';
import Link from 'gatsby-link';
import { Card, Label } from 'semantic-ui-react';

const styles = {
    partnerLogo: {
        width: '100%',
    },
    logoContainer: {
        width: '80px',
        height: '50px',
        marginRight: '20px',
        display: 'flex',
        alignItems: 'center',
    }
};




const Partner = ({partner}) => (
    <Link to={'/partners/' + partner.name.replace(/\W+/g, '-').toLowerCase()} style={styles.logoContainer}>
        <img  src={partner.logo.file.url} alt="Partner Logo" style={styles.partnerLogo} />
    </Link>
);

export default Partner