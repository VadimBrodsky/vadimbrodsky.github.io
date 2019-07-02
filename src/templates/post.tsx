import React from 'react';
import { graphql } from 'gatsby';

import Layout from './layout';

const PostTemplate = () => {
  return (
    <Layout>
      <h1>Post Layout</h1>
    </Layout>
  );
};

export default PostLayout;

/*
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;
 */
