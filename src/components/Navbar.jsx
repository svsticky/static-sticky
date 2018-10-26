import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import { Dropdown, Image, Menu, Container, Button, Grid } from 'semantic-ui-react'
import logo from '../images/logo-sticky-small.png'
import menu from '../data/menu.json'

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
              {this.renderExternMenuItems(menu[menuItem.node.slug])}
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

  renderExternMenuItems = externMenuItems => 
    externMenuItems.map(externMenuItem => (
        <Dropdown.Item
          className="item"
          key={externMenuItem.title}
          href={externMenuItem.url}
          target="_blank"
        >
          <Grid>
            <Grid.Row>
              <Grid.Column width={12}>
                <p class="item-text icon-item-text">{externMenuItem.title}</p>
              </Grid.Column>
              <Grid.Column>
                <i class="item-text icon external" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Dropdown.Item>
      )
    )


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
            <Dropdown
              item
                text="Extern"
                direction="left"
                key="extern"
            >
              <Dropdown.Menu>
                {this.renderExternMenuItems(menu.extern)}
              </Dropdown.Menu>
            </Dropdown>
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
      .icon-item-text {
        padding-right: 20pt;
      }
    }
    .link-item {
      &:hover {
        background-color: #000078;
      }
      .button {
        background-color: white;
        color: #000078;
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
