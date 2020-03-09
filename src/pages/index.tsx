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
        <body className="bg-white" />
      </Helmet>

      <SEO title="Home" />

      <section className="font-display mb-20 container mx-auto">
        <h2 className="text-4xl mb-10">
          Hello, I am{' '}
          <Link to="/about" className="font-bold">
            Vadim Brodsky
          </Link>
          , a passionate Fullstack Web Developer & Designer from Waterloo Canada.
          Currently working as a Software Developer at{' '}
          <a href="https://www.vidyard.com" className="font-bold">
            Vidyard
          </a>
          , where I help to build the video marketing platform that businesses
          &#10084;&#65039;
        </h2>

        <p className="text-xl text-gray-700 mb-10">
          I take pride in creating digital experiences that solve problems and delight
          users. I am an avid tech enthusiast, I love learning, tinkering and traveling.
        </p>
      </section>

      <section className=" bg-gray-200">
        <div className="container mx-auto">
          <h2 className="bg-black text-white inline-block font-monospace text-xs p-2 mb-8 ">
            &lt;BlogPosts limit={2} sort="desc" /&gt;
          </h2>

          {posts.map((post) => (
            <article key={post.id} className="pb-8">
              <header>
                <h3 className="font-bold font-display text-xl">
                  <Link to={`/posts/${post.slug}`}>{post.title}</Link>
                </h3>
              </header>
              <div className="text-gray-700">
                <span className="font-bold">TL;DR</span> {post.tldr}
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
