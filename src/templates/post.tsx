import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';
import './post.css';

export const query = graphql`
  query PostQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date: date(formatString: "MMMM Do, Y")
        datetime: date(formatString: "Y-MM-D")
        slug
        title
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
          <time dateTime={post.frontmatter.datetime}>{post.frontmatter.date}</time>
          <section ariaLabel="Quick summary">TL;DR {post.frontmatter.tldr}</section>
        </header>
        <div className="article-content">
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </article>
    </Layout>
  );
};

export default PostTemplate;
