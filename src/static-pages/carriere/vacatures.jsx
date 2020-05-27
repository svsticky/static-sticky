import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import JobsList from '$/components/jobs/JobsList';
import JobFilter from '$/components/jobs/JobFilter';
import Markdown from 'markdown-to-jsx';
import Layout from '../../components/layout/Layout';
import { getTranslation, getLanguage, metadata } from '../../data/i18n';

class JobIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.language =
      typeof window !== 'undefined'
        ? getLanguage(window)
        : metadata.defaultLocale;
    this.state = {
      studiesFilter: [],
      typesFilter: [],
    };
    this.jobs = this.props.data.allContentfulJobListing.edges.filter(
      content => content.node.node_locale === this.language // Only get the current language
    );

    this.page = props.data.contentfulPage;
  }

  updateStudiesFilter = selectedStudies => {
    this.setState({ studiesFilter: selectedStudies });
  };

  updateTypesFilter = selectedTypes => {
    this.setState({ typesFilter: selectedTypes });
  };

  render() {
    const title = getTranslation(this.language, 'vacancy.title');
    return (
      <Layout title={title}>
        <h2>{title}</h2>
        <Markdown>{this.page.content.content}</Markdown>
        <JobFilter
          updateStudiesFilter={this.updateStudiesFilter}
          studiesFilter={this.state.studiesFilter}
          updateTypesFilter={this.updateTypesFilter}
          typesFilter={this.state.typesFilter}
          locale={this.language}
        />
        <JobsList
          jobs={this.jobs}
          studiesFilter={this.state.studiesFilter}
          typesFilter={this.state.typesFilter}
        />
      </Layout>
    );
  }
}

const JobsListQuery = graphql`
  query JobsListQuery {
    allContentfulJobListing(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          job_title
          summary
          featured
          study {
            short
          }
          type
          isJob
          slug
          node_locale
          createdAt
          partner {
            name
            logo {
              file {
                url
              }
            }
          }
        }
      }
    }
    contentfulPage(slug: { eq: "vacatures" }) {
      title
      content {
        content
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={JobsListQuery}
    render={data => <JobIndexPage data={data} {...props} />}
  />
);
