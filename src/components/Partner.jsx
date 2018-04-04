import React from 'react';
import Link from 'gatsby-link';

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