import * as React from 'react';
import { graphql } from 'gatsby';
import {  MDXRenderer } from 'gatsby-plugin-mdx';

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
  return (
    <Layout>
      <article className="container mx-auto">
        <header className="leading-normal mb-8">
          <h1 className="font-display text-4xl">{post.frontmatter.title}</h1>
          <section aria-label="Quick summary" className="italic text-lg">
            <span className="font-bold not-italic font-monospace">TL;DR</span>{' '}
            {post.frontmatter.tldr}
          </section>
          <time dateTime={post.frontmatter.datetime}>{post.frontmatter.date}</time>
        </header>
        <div className="article-content leading-loose">
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </article>
    </Layout>
  );
};

export default PostTemplate;
