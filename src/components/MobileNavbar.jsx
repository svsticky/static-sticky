import React from 'react';
import { Container, Icon, Menu } from 'semantic-ui-react';
import Link from 'gatsby-link';
import Radium from 'radium';
import MobileSubMenu from '../components/MobileSubMenu';
import globalStyles from '../styles/globalStyles';
import responsive from '../styles/responsive';

const styles = {
  navbar: {
    backgroundColor: globalStyles.theme.bestuurskleur,
    color: 'white',
  },
  navbaritem: {
    color: 'white',
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
    <div style={responsive.hide.tabletUp}>
      <MobileSubMenu activeItem={this.state.activeItem}/>
      <Menu widths={3} fixed='bottom' icon='labeled' secondary style={styles.navbar} size='mini'>
        <Menu.Item name="association" style={styles.navbaritem} onClick={this.handleItemClick}>
          <Icon name='users'/>
          Vereniging
        </Menu.Item>
        <Menu.Item name="career" style={styles.navbaritem} onClick={this.handleItemClick}>
          <Icon name='briefcase'/>
          Carrière
        </Menu.Item>
        <Menu.Item name="education" style={styles.navbaritem} onClick={this.handleItemClick}>
          <Icon name='student'/>
          Onderwijs
        </Menu.Item>
      </Menu>
    </div>
  )};
  }
export default Radium(MobileNavbar);