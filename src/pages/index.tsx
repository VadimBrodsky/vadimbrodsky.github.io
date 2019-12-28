import * as React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import SEO from '../components/seo';
import usePosts from '../hooks/use-posts';

const IndexPage = () => {
  const posts = usePosts();

  return (
    <Layout>
      <Helmet>
        <html lang="en" className="text-gray-900 antialiased leading-tight" />
        <body className="bg-gray-100" />
      </Helmet>

      <SEO title="Home" />

      <div className="section__content">
        <h2 className="text__large text__light">
          Hello, I am <a href="about/">Vadim Brodsky</a>, a passionate Full–Stack Web
          Developer &amp; Designer based in Kitchener-Waterloo. Currently working as a
          Software Developer at <a href="https://www.vidyard.com">Vidyard</a>, where I
          help build the video marketing platform that businesses &lt;3
        </h2>
        <p className="text__medium">
          I take pride in creating digital experiences that solve problems and delight
          users. I am an avid tech enthusiast and geek, I love learning, tinkering and
          traveling.
        </p>
      </div>

      <h2>Recent Blog posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title} - {post.slug}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;
