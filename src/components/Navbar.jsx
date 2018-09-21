import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Toolbar, AppBar, Button, Menu, MenuItem } from '@material-ui/core';
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
            <Button
              key={menuItem.node.title}
              color="inherit"
              onClick={e => this.handleMenuClick(menuItem.node.title, e)}
            >
              { menuItem.node.title }
            </Button>
            <Menu
              id={menuItem.node.title}
              anchorEl={this.state.anchorEl}
              open={Boolean(this.state.selected === menuItem.node.title)}
              onClose={this.handleMenuClose}
            >
              { this.renderMenuSubItems(pages.filter(subMenuItem =>
                subMenuItem.node.parentPage !== null &&
                subMenuItem.node.parentPage.slug === menuItem.node.slug)) }
            </Menu>
          </React.Fragment>);
      }
      return null;
    })
  )

  renderMenuSubItems = subMenuItems =>
    subMenuItems.map(subMenuItem => (
      <MenuItem
        key={subMenuItem.node.title}
        component={Link}
        to={'/' + subMenuItem.node.parentPage.slug + '/' + subMenuItem.node.slug}
        onClick={this.handleMenuClose}
      >
        { subMenuItem.node.title }
      </MenuItem>
    ));

  render() {
    return (
      <NavBarWrapper>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Button component={Link} to="/" color="inherit" className="logo">
              <img src={logo} alt="Sticky logo" />
            </Button>
            <div style={{ flex: 1 }} />
            { this.renderMenuItems(this.props.pages) }
          </Toolbar>
        </AppBar>
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
