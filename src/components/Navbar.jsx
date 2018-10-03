import React from 'react';
import Link from 'gatsby-link';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Dropdown, Image, Menu, Container } from 'semantic-ui-react';
import logo from '../images/logo-sticky-small.png';




class NavBar extends React.Component {
  renderMenuItems = data => (
    data.map((menuItem) => {
      if (menuItem.node.parentPage === null) {
        return (
          <Dropdown item text={menuItem.node.title} direction="left">
            <Dropdown.Menu>
            { this.renderMenuSubItems(data.filter(subMenuItem =>
              subMenuItem.node.parentPage !== null &&
              subMenuItem.node.parentPage.slug === menuItem.node.slug)) }
            </Dropdown.Menu>
          </Dropdown>);
      }
      return null;
    })
  )

  renderMenuSubItems = subMenuItems =>
    subMenuItems.map(subMenuItem => (
      <Dropdown.Item className="item"
        key={subMenuItem.node.title}
        as={Link}
        to={'/' + subMenuItem.node.parentPage.slug + '/' + subMenuItem.node.slug}
      >
        <p className="item-text">{ subMenuItem.node.title }</p>
      </Dropdown.Item>
    ));

  render() {
    return (
      <NavBarWrapper>
        <Menu className="navbar">
          <Container>
            <Image as={Link} to="/" className="logo">
              <img src={logo} alt="Sticky logo" />
            </Image>
            <div style={{ flex: 1 }} />
            { this.renderMenuItems(this.props.data.allContentfulPage.edges)}
          </Container>
        </Menu>
      </NavBarWrapper>
    );
  }
}

const NavBarWrapper = styled.div`
  &&& 
  .navbar {
    background-color: #000078;
    border-radius: 0;
    .logo {
      margin: 0.5em;
      img {
        height: 3em;
      }
    }
    .item {
      color: white;
      &:hover {
        background-color: white;
        color: #000078;
      }
      .item-text {
        color: #000078;
      }
    }
  }
`


export default props => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulPage {
          edges {
            node {
              id
              title
              slug
              parentPage {
                title
                slug
              }
            }
          }
        }
      }
    `}
    render={data => <NavBar data={data} {...props} />}
  />
)
