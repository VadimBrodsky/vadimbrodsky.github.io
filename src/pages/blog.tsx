import * as React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import SEO from '../components/seo';
import usePosts from '../hooks/use-posts';

const BlogPage = () => {
  const posts = usePosts();

  return (
    <Layout>
      <Helmet>
        <html lang="en" className="text-gray-900 antialiased leading-tight" />
        <body className="bg-white" />
      </Helmet>

      <SEO title="Blog" />

      <section>
      </section>
    </Layout>
  )
}

export default BlogPage;
