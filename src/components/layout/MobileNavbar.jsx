import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { device } from '../../data/Devices';
import menu from '$/data/menu.json';
import logo from '$/images/hoofd.svg';

class MobileNavBar extends React.Component {
  state = {
    active: null,
    showSubMenu: false,
  };

  constructor(props) {
    props.data.allContentfulPage.edges.sort(
      (a, b) => b.node.title.localeCompare(a.node.title) // Sorting submenuitems a-z (flex-direction is column-reverse/row-reverse)
    );
    super(props);
  }

  handleMenuClick = clicked => {
    clicked === this.state.active
      ? this.setState({ showSubMenu: false })
      : this.setState({ active: clicked, showSubMenu: true });
  };

  renderMenuItems = pages => {
    return pages
      .filter(page => page.node.parentPage === null)
      .map(page => (
        <ParentMenuItem
          key={page.node.title}
          onClick={() => this.handleMenuClick(page.node.slug)}
          active={this.state.active === page.node.slug} // For difference in style
        >
          {page.node.title}
        </ParentMenuItem>
      ));
  };

  renderSubMenuItems = pages => {
    return (
      <>
        {pages
          .filter(
            page =>
              page.node.parentPage !== null &&
              page.node.parentPage.slug === this.state.active
          )
          .map(page => (
            <Link
              to={'/' + page.node.parentPage.slug + '/' + page.node.slug}
              key={page.node.title}
            >
              <div className="sub-menu-item">{page.node.title}</div>
            </Link>
          ))}
        {this.state.active
          ? this.renderExternalItems(menu[this.state.active.toLowerCase()])
          : null}
      </>
    );
  };

  renderExternalItems = links => {
    return (
      <>
        {this.state.active === 'links' ? (
          <>
            <a
              href="https://koala.svsticky.nl/"
              key="Koala"
              target="_blank"
              rel="noopener noreferrer" // For safety
            >
              <div className="sub-menu-item">
                Koala
                <i className="item-text icon external" />
              </div>
            </a>
            <a
              href="https://photos.svsticky.nl/"
              key="Photos"
              target="_blank"
              rel="noopener noreferrer" // For safety
            >
              <div className="sub-menu-item">
                Foto's
                <i className="item-text icon external" />
              </div>
            </a>
          </>
        ) : null}
        {links.map(link => (
          <a
            href={link.url}
            key={link.title}
            target="_blank"
            rel="noopener noreferrer" // For safety
          >
            <div className="sub-menu-item">
              {link.title}
              <i className="item-text icon external" />
            </div>
          </a>
        ))}
      </>
    );
  };

  render() {
    const { edges } = this.props.data.allContentfulPage;
    return (
      <MobileNavBarWrapper
        color={
          !this.props.data.contentfulBoard
            ? '#000000'
            : this.props.data.contentfulBoard.color
        }
      >
        <div className="menu">
          <Link className="center-container" to="/">
            <img src={logo} alt="Sticky Logo" className="sticky-logo" />
          </Link>
          {this.renderMenuItems(edges)}
          <ParentMenuItem
            className="center-container"
            onClick={() => {
              this.handleMenuClick('links');
            }}
          >
            <i className="external icon" />
          </ParentMenuItem>
        </div>
        <CSSTransition
          in={this.state.showSubMenu}
          timeout={300}
          classNames="submenu-animation"
          unmountOnExit
          onExited={() => this.setState({ active: null })}
        >
          <div className="sub-menu-wrapper">
            <div className="sub-menu">{this.renderSubMenuItems(edges)}</div>
          </div>
        </CSSTransition>
      </MobileNavBarWrapper>
    );
  }
}

const MobileNavBarWrapper = styled.div`
  @media ${device.tablet} {
    display: none;
  }
  .center-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .sticky-logo {
    @media (max-width: 400px) {
      width: 70%;
    }
    @media (min-width: 400px) {
      width: 30px;
    }
  }
  .external {
    /* little margin override for default external icon of semantic ui*/
    margin: 0 0 0.5em 0.3em;
  }
  .menu {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: ${props => props.color};
    z-index: 10;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 2fr 1fr;
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
        color: ${props => props.color};
        margin: 0.25em;
        text-align: center;
        padding: 0 1em;
        height: 2.5em;
        max-width: 100%;
        border: 1px solid ${props => props.color};
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .submenu-animation {
    &-enter {
      transform: translateY(100%);
      &-active {
        transform: translateY(0%);
        transition: all 300ms ease-out;
      }
    }
    &-exit {
      transform: translateY(0%);
      &-active {
        transform: translateY(100%);
        transition: all 300ms ease-out;
      }
    }
  }
`;

// Had to substract this to be able to use styled-components props effectively...
const ParentMenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3em;
  border: 1px solid white;
  border-radius: 5px;
  background-color: ${props => (props.active ? 'white' : props.color)};
  color: ${props => (props.active ? props.color : 'white')};
`;

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
        contentfulBoard(current: { eq: true }) {
          color
        }
      }
    `}
    render={data => <MobileNavBar data={data} {...props} />}
  />
);
