import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';


const subMenuItems = {
  association: {
    'Besturen':'besturen'
  },
  career: {
    'Vacatures':'vacatures',
    'Partners':'partners',
    'Stages /\nScripties':'stages'
  },
  education: {
    'Links':'links'
  }
}


const mobileSubMenu = props => {
  return(
    props.activeItem && (
      <MobileSubMenuPopUp>
        <MobileSubMenu>
          {Object.entries(subMenuItems[props.activeItem]).map(([naam, url]) => 
            <MobileSubMenuItem to={"/" + url} key={url}>
              {naam}
            </MobileSubMenuItem>)
          }
        </MobileSubMenu>
      </MobileSubMenuPopUp>
    )
  );
};


const MobileSubMenuPopUp = styled.div`
  background-color: 'white';
  position: 'fixed';
  border-radius: '8px 8px 0 0';
  bottom: '3.8em';
  width: '100%';
  text-align: 'center';
  padding: '5px';
  margin: '0';
  z-index: 5;
  box-shadow: '0 -1px 3px';
`;


const MobileSubMenu = styled.div`
  display: 'flex';
  flex-wrap: 'wrap';
  justify-content: 'flex-end';
`;


const MobileSubMenuItem = styled(Link)`
  color: '#000078';
  width: '33%';
  align-self: 'flex-start';
  height: '4em';
  border: '1px solid #000078';
  border-radius: '8px';
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  margin: '0.15%';
  padding: '0';
`;


export default mobileSubMenu;
