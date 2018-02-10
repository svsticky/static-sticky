import React from 'react';
import Radium from 'radium';

const styles = {
  footer: {
    backgroundColor: '#efefef',
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  footerContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  footerItem: {
    width: '200px',
    margin: '20px',
  },
};

const Footer = () => (
  <div style={styles.footer} >
    <div style={styles.footerContainer}>
      <div style={styles.footerItem}>
        <h3>Bezoekadres</h3>
        Kamer 2.81 <br />
        Buys Ballot Gebouw <br />
        Princetonplein 5 <br />
        3584 CC UTRECHT
      </div>
      <div style={styles.footerItem}>
        <h3>Postadres</h3>
        Studievereniging Sticky <br />
        Princetonplein 5 <br />
        3584 CC UTRECHT
      </div>
      <div style={styles.footerItem}>
        <h3>Gegevens</h3>
        IBAN: NL61INGB0002877106 <br />
        BTW: NL-8173.55.303.B01 <br />
        KvK: 30220729, UTRECHT
      </div>
    </div>
  </div>
);

export default Radium(Footer);
