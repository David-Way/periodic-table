import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TableOfElements from '../components/TableOfElements/TableOfElements';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TableOfElements />
  </Layout>
)

export default IndexPage;
