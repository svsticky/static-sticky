import React from 'react';
import Layout from './Layout';
import { Card } from 'semantic-ui-react';

export default ({ page, children }) => {
  return (
    <Layout title={page.title}>
      <h2 className="title">{page.title}</h2>
      <Card fluid>{children}</Card>
    </Layout>
  );
};
