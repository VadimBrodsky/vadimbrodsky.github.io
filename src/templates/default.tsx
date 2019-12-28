import * as React from 'react';
import Layout from '../components/layout';

const DefaultMDXLayout = ({ children }) => {
  return (
    <Layout>
      <h1>Default MDX Layout</h1>
      <div>{children}</div>
    </Layout>
  );
};

export default DefaultMDXLayout;
