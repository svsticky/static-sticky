import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import {
  Dropdown,
  Image,
  Menu,
  Container,
  Button,
  Grid,
} from 'semantic-ui-react';
import logo from '$/images/sticky-logo.svg';
import menu from '$/data/menu.json';
import { Location } from '@reach/router';
import { device } from '../../data/Devices';
import { getTranslation, getLanguage, metadata } from '../../data/i18n';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.language =
      typeof window !== 'undefined'
        ? getLanguage(window)
        : metadata.defaultLocale;

    props.data.allContentfulPage.edges = props.data.allContentfulPage.edges.filter(
      content => content.node.node_locale === this.language // Only get the current language
    );
    props.data.allContentfulPage.edges.sort(
      (a, b) => b.node.title.localeCompare(a.node.title) // Sorting all the menu items
    );
  }

  changeLanguage = (lg, location) => {
    let url = location.pathname;
    let oldLg = url.split('/')[1];
    let newUrl;

    if (oldLg) {
      if (Object.keys(metadata.languages).indexOf(oldLg) === -1) {
        lg = `${lg}/${oldLg}`;
      }
      newUrl = url.replace(oldLg, lg);
    } else {
      newUrl = url + lg;
    }

    console.log(newUrl);
    return `/${newUrl}`;
  };

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
        );
      }
      return null;
    });

  renderMenuSubItems = subMenuItems =>
    subMenuItems
      .sort((a, b) => a.node.title.localeCompare(b.node.title))
      .map(subMenuItem => (
        <Dropdown.Item
          className="item"
          key={subMenuItem.node.title}
          as={Link}
          to={`/${subMenuItem.node.node_locale}/${subMenuItem.node.parentPage.slug}/${subMenuItem.node.slug}`}
        >
          <p className="item-text">{subMenuItem.node.title}</p>
        </Dropdown.Item>
      ));

  renderLanguageSwitch = (languages, location) => {
    let lgItems = [];
    for (let lg in languages) {
      lgItems.push(
        <Dropdown.Item className="item" key={lg}>
          <Link to={this.changeLanguage(lg, location)}>
            {languages[lg].key}
          </Link>
        </Dropdown.Item>
      );
    }
    return lgItems;
  };

  renderExternMenuItems = externMenuItems =>
    externMenuItems.map(externMenuItem => (
      <Dropdown.Item
        className="item"
        key={externMenuItem.title}
        href={externMenuItem.url}
        target="_blank"
        rel="noopener noreferrer" // For safety
      >
        <Grid>
          <Grid.Row>
            <Grid.Column width={12}>
              <p className="item-text icon-item-text">{externMenuItem.title}</p>
            </Grid.Column>
            <Grid.Column>
              <i className="item-text icon external" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Dropdown.Item>
    ));

  render() {
    return (
      <NavBarWrapper
        color={
          !this.props.data.contentfulBoard
            ? '#000000'
            : this.props.data.contentfulBoard.color
        }
      >
        <Menu size="large" className="navbar">
          <Container>
            <Image
              as={Link}
              to={`/${this.props.data.allContentfulPage.edges[0].node.node_locale}`}
              className="logo"
            >
              <img src={logo} alt="Sticky logo" />
            </Image>
            <div style={{ flex: 1 }} />
            {this.renderMenuItems(this.props.data.allContentfulPage.edges)}
            <Dropdown item text="Links" direction="left" key="links">
              <Dropdown.Menu>
                {this.renderExternMenuItems(menu.links)}
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item className="link-item">
              <Button
                href="http://koala.svsticky.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Koala
              </Button>
            </Menu.Item>
            <Menu.Item className="link-item">
              <Button
                href="https://intro.svsticky.nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                {getTranslation(this.language, 'menu.signup')}
              </Button>
            </Menu.Item>
            <Location>
              {({ location }) => {
                return (
                  <Dropdown icon="globe" item labeled>
                    <Dropdown.Menu>
                      {this.renderLanguageSwitch(metadata.languages, location)}
                    </Dropdown.Menu>
                  </Dropdown>
                );
              }}
            </Location>
          </Container>
        </Menu>
      </NavBarWrapper>
    );
  }
}

const NavBarWrapper = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
  }
  .navbar {
    position: fixed;
    width: 100%;
    z-index: 100;
    background-color: ${props => props.color} !important;
    border-radius: 0;
    .logo {
      height: 3em;
      padding-top: 0.3rem;
      img {
        height: 100%;
      }
    }
    .item {
      color: white !important;
      &:hover {
        background-color: white;
        color: ${props => props.color};
      }
      .item-text {
        color: ${props => props.color};
      }
      .icon-item-text {
        padding-right: 20pt;
      }
      .icon.globe {
        font-size: 25px;
        margin: 0;
      }
    }
    .link-item {
      &:hover {
        background-color: ${props => props.color};
      }
      .button {
        background-color: white;
        color: ${props => props.color};
        &:hover {
          background-color: lightgrey;
        }
      }
    }
  }
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
              node_locale
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
    render={data => <NavBar data={data} {...props} />}
  />
);
