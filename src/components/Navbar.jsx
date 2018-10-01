import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Button, Dropdown, Menu } from 'semantic-ui-react';
import logo from '../images/logo-sticky-small.png';

class Navbar extends React.Component {
  state = {
    anchorEl: null,
    selected: '',
  }

  handleMenuClick = (title, e) => (
    this.setState({
      anchorEl: e.currentTarget,
      selected: title,
    })
  );

  handleMenuClose = () => (
    this.setState({
      anchorEl: null,
      selected: null,
    })
  );

  renderMenuItems = pages => (
    pages.map((menuItem) => {
      if (menuItem.node.parentPage === null) {
        return (
          <React.Fragment key={menuItem.node.title}>
            <Dropdown item text={menuItem.node.title}>
              <Dropdown.Menu>
              { this.renderMenuSubItems(pages.filter(subMenuItem =>
                subMenuItem.node.parentPage !== null &&
                subMenuItem.node.parentPage.slug === menuItem.node.slug)) }
              </Dropdown.Menu>
            </Dropdown>
          </React.Fragment>);
      }
      return null;
    })
  )

  renderMenuSubItems = subMenuItems =>
    subMenuItems.map(subMenuItem => (
      <Dropdown.Item
        key={subMenuItem.node.title}
        component={Link}
        to={'/' + subMenuItem.node.parentPage.slug + '/' + subMenuItem.node.slug}
      >
        { subMenuItem.node.title }
      </Dropdown.Item>
    ));

  render() {
    return (
      <NavBarWrapper>
        <div position="fixed" color="primary">
          <div>
            <Button component={Link} to="/" color="inherit" className="logo">
              <img src={logo} alt="Sticky logo" />
            </Button>
            <div style={{ flex: 1 }} />
            <Menu>
              { this.renderMenuItems(this.props.pages) }
            </Menu>
          </div>
        </div>
      </NavBarWrapper>
    );
  }
}

const NavBarWrapper = styled.div`
  .logo {
    img {
      height: 3.2em;
      margin-bottom: 0;
    }
  }
`;

export default Navbar;
