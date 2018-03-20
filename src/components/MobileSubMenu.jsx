import React from 'react';
import Link from 'gatsby-link';

const styles = {
  mobileSubMenuPopUp: {
    backgroundColor: 'white',
    position: 'fixed',
    bottom: '3.8em',
    width: '100%',
    textAlign: 'center',
    padding: '5px',
    margin: '0',
    zIndex: 1
  },
  mobileSubMenu: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end'
  },
  mobileSubMenuItem: {
    color: '#000078',
    width: '33%',
    alignSelf: 'flex-start',
    height: '4em',
    border: '1px solid #000078',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0.15%'
  }
}

//
const subMenuItems = {
  association: {
    'Besturen':'besturen'
  },
  career: {
    'Vacatures':'vacatures',
    'Partners':'partners',
    'Stages/Scripties':'stages'
  },
  education: {
    'Links':'links'
  }
}

const MobileSubMenu = (props) => {
  return(
    props.activeItem ? (
      <div style={styles.mobileSubMenuPopUp}>
        <div style={styles.mobileSubMenu}>
          {Object.entries(subMenuItems[props.activeItem]).map(item => 
            <Link to={"/" + item[1]} key={item} style={styles.mobileSubMenuItem}>
              {item[0]}
            </Link>)
          }
        </div>
      </div>
    ) : null
  );
};

export default MobileSubMenu;
