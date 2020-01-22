import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';

export const query = graphql`
  query PostQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <article className="container mx-auto">
        <h1>{post.title}</h1>
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
    </Layout>
  );
};

export default PostTemplate;
