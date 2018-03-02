import React from 'react';
import { Icon, Menu, Segment } from 'semantic-ui-react';

const styles = {
  mobileSubMenuPopUp: {
    position: 'fixed',
    bottom: '3.8em',
    width: '100%',
    textAlign: 'center',
    padding: '0',
    margin: '0',
    zIndex: 5
  },
  mobileSubMenu: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end'
  },
  mobileSubMenuItem: {
    width: '33%',
    alignSelf: 'flex-start',
    height: '4em',
    border: '1px solid #efefef',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0.15%'
  }
}

const subMenuItems = {
  association: [
    'Besturen'
  ],
  career: [
    'Vacatures',
    'Partners',
    'Stages/Scripties'
  ],
  education: [
    'Links'
  ]
}

const MobileSubMenu = (props) => {
  return(
    props.activeItem ? (
      <Segment style={styles.mobileSubMenuPopUp}>
        <div style={styles.mobileSubMenu}>
          {subMenuItems[props.activeItem].map(item =>
            <div style={styles.mobileSubMenuItem}>
              {item}
            </div>)
          }
        </div>
      </Segment>
    ) : null
  );
};

export default MobileSubMenu;
