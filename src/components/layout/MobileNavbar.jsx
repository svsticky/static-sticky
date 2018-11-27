import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

class MobileNavBar extends React.Component {
  state = {
    active: '',
  }

  handleMenuClick = clicked => {
    clicked === this.state.active
      ? this.setState({ active: '' })
      : this.setState({ active: clicked })
  }

  renderMenuItems = pages =>
    pages.map(menuItem => {
      if (menuItem.node.parentPage === null) {
        return (
          <ParentMenuItem
            key={menuItem.node.title}
            onClick={() => this.handleMenuClick(menuItem.node.title)}
            active={this.state.active === menuItem.node.title}
          >
            {menuItem.node.title}
          </ParentMenuItem>
        )
      }
      return null
    })

  renderSubMenuItems = pages =>
    pages.map(menuItem => {
      if (
        menuItem.node.parentPage !== null &&
        menuItem.node.parentPage.title === this.state.active
      ) {
        return (
          <Link
            to={'/' + menuItem.node.parentPage.slug + '/' + menuItem.node.slug}
          >
            <div className="sub-menu-item">{menuItem.node.title}</div>
          </Link>
        )
      }
      return null
    })

  render() {
    return (
      <MobileNavBarWrapper>
        <div className="menu">
          {this.renderMenuItems(this.props.data.allContentfulPage.edges)}
        </div>
        {this.state.active ? (
          <div className="sub-menu-wrapper">
            <div className="sub-menu">
              {this.renderSubMenuItems(this.props.data.allContentfulPage.edges)}
            </div>
          </div>
        ) : null}
      </MobileNavBarWrapper>
    )
  }
}

const MobileNavBarWrapper = styled.div`
  .menu {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #20730d;
    z-index: 10;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5em;
    padding: 0.5em;
    border-radius: 5px 5px 0 0;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  }
  .sub-menu-wrapper {
    margin: 0 0 3.5em 0;
    padding: 0.5em 0.5em 1em 0.5em;
    background-color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    border-radius: 10px 10px 0 0;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    .sub-menu {
      display: flex;
      flex-flow: row-reverse wrap-reverse;
      .sub-menu-item {
        color: #20730d;
        margin: 0.25em;
        text-align: center;
        padding: 0 1em;
        height: 2.5em;
        max-width: 100%;
        border: 2px solid #20730d;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`
// Had to substract this to be able to use styled-components props effectively...
const ParentMenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3em;
  border: 2px solid white;
  border-radius: 5px;
  background-color: ${props => (props.active ? 'white' : '#20730d')};
  color: ${props => (props.active ? '#20730d' : 'white')};
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
    render={data => <MobileNavBar data={data} {...props} />}
  />
)
