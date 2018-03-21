import React from 'react';
import Link from 'gatsby-link';
import MobileSubMenu from '../components/MobileSubMenu';
import styled from 'styled-components';

const styles = {
  navbar: {
  },
  navbaritem: {
  },
};

class MobileNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCareerMenu: false,
      showEducationMenu: false,
      activeItem: null,
    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick = (e, { name }) => {
    if(this.state.activeItem === name) {
      console.log(name + ' already the activeItem');
      this.setState({
        activeItem: null
      })
    } else {
    this.setState({
      activeItem: name,
    })};
  }

  render() {
    return (
    <MobileSubMenuContainer>
      <MobileSubMenu activeItem={this.state.activeItem}/>
      <Menu widths={3} fixed='bottom' icon='labeled' secondary size='mini'>
        <MenuItem name="association" onClick={this.handleItemClick}>
          Vereniging
        </MenuItem>
        <MenuItem name="career" onClick={this.handleItemClick}>
          Carrière
        </MenuItem>
        <MenuItem name="education" onClick={this.handleItemClick}>
          Onderwijs
        </MenuItem>
      </Menu>
    </MobileSubMenuContainer>
  )};
}

const MobileSubMenuContainer = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const Menu = styled.div`
  background-color: '#000078';
  color: 'white';
`;

const MenuItem = styled.div`
  color: 'white';
`;

export default MobileNavbar;