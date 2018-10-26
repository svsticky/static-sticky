import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import { Dropdown, Image, Menu, Container, Button } from 'semantic-ui-react'
import logo from '../images/logo-sticky-small.png'

class NavBar extends React.Component {
  renderMenuItems = data =>
    data.map(menuItem => {
      if (menuItem.node.parentPage === null) {
        return (
          <Dropdown
            item
            text={menuItem.node.title}
            direction="left"
            key={menuItem.node.title}
          >
            <Dropdown.Menu>
              {this.renderMenuSubItems(
                data.filter(
                  subMenuItem =>
                    subMenuItem.node.parentPage !== null &&
                    subMenuItem.node.parentPage.slug === menuItem.node.slug
                )
              )}
            </Dropdown.Menu>
          </Dropdown>
        )
      }
      return null
    })

  renderMenuSubItems = subMenuItems =>
    subMenuItems.map(subMenuItem => (
      <Dropdown.Item
        className="item"
        key={subMenuItem.node.title}
        as={Link}
        to={
          '/' + subMenuItem.node.parentPage.slug + '/' + subMenuItem.node.slug
        }
      >
        <p className="item-text">{subMenuItem.node.title}</p>
      </Dropdown.Item>
    ))

  render() {
    return (
      <NavBarWrapper>
        <Menu className="navbar">
          <Container>
            <Image as={Link} to="/" className="logo">
              <img src={logo} alt="Sticky logo" />
            </Image>
            <div style={{ flex: 1 }} />
            {this.renderMenuItems(this.props.data.allContentfulPage.edges)}
            <Menu.Item className="link-item">
              <Button
                href="http://koala.svsticky.nl"
                target="_blank"
                className="button"
              >
                Koala
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
      </NavBarWrapper>
    )
  }
}

const NavBarWrapper = styled.div`
  &&& .navbar {
    background-color: #20730d;
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
        color: #20730d;
      }
      .item-text {
        color: #20730d;
      }
    }
    .link-item {
      &:hover {
        background-color: #20730d;
      }
      .button {
        background-color: white;
        color: #20730d;
        &:hover {
          background-color: lightgrey;
        }
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
