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

  renderMenu = pages => (
    pages.map(item => (
      (item.node.contentfulparent === null ?
        <React.Fragment key={item.node.title}>
          <Button
            key={item.node.title}
            color="inherit"
            onClick={e => this.handleMenuClick(item.node.title, e)}
          >
            {item.node.title}
          </Button>
          <Menu
            id={item.node.title}
            anchorEl={this.state.anchorEl}
            open={Boolean(this.state.selected === item.node.title)}
            onClose={this.handleMenuClose}
          >
            { pages.map(subitem => (
                subitem.node.contentfulparent &&
                subitem.node.contentfulparent.title === item.node.title ?
                  <MenuItem
                    key={subitem.node.title}
                    component={Link}
                    to={'/' + item.node.title + '/' + subitem.node.title}
                    onClick={this.handleMenuClose}
                  >
                    {subitem.node.title}
                  </MenuItem>
                :
                null
            ))}
          </Menu>
        </React.Fragment>
        :
        null)
    ))
  )

  render() {
    return (
      <NavBarWrapper>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Button component={Link} to="/" color="inherit" className="logo">
              <img src={logo} alt="Sticky logo" />
            </Button>
            <div style={{ flex: 1 }} />
            { this.renderMenu(this.props.pages) }
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
