import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';
import './post.css';

export const query = graphql`
  query PostQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        tldr
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => {
  console.log({ post });
  return (
    <Layout>
      <article className="container mx-auto">
        <header>
          <h1 className="text-4xl font-bold">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.tldr}</p>
        </header>
        <main className="article-content">
          <MDXRenderer>{post.body}</MDXRenderer>
        </main>
      </article>
    </Layout>
  );
};

export default PostTemplate;
