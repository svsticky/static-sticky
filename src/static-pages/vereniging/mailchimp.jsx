import React from 'react';
import Layout from '../../components/layout/Layout';
import Mailchimp from '../../components/Mailchimp';
import { StaticQuery } from 'gatsby';

const MailchimpPage = props => {
  const page = props.data.contentfulPage;
  return (
    <Layout title={page.title}>
      <h2>{page.title}</h2>
      <Mailchimp></Mailchimp>
    </Layout>
  );
};

const MailingListPageQuery = graphql`
  query MailingListPageQuery {
    contentfulPage(slug: { eq: "mailchimp" }) {
      title
      content {
        content
      }
    }
  }
`;

export default props => (
  <StaticQuery
    query={MailingListPageQuery}
    render={data => <MailchimpPage data={data} {...props} />}
  />
);
