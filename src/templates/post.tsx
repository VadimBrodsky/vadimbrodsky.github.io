import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const PostTemplate = ({ children }) => {
  return (
    <Layout>
      <h1>Post Layout</h1>
      <div>{children}</div>
    </Layout>
  );
};

export default PostTemplate;

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
