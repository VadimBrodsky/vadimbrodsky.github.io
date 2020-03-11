import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';

import useSiteMetadata from '../hooks/use-site-metadata';
import Header from './header';
import Aside from './aside';
import Tweet from './tweet';
import Image from './image';

import './layout.css';

const Layout = ({ children }) => {
  const shortcodes = { Aside, Tweet, Image };
  const { title } = useSiteMetadata();
  // <footer>© {new Date().getFullYear()}, Built with</footer>

  return (
    <MDXProvider components={shortcodes}>
      <Header siteTitle={title} />
      <main>{children}</main>
    </MDXProvider>
  );
};

export default Layout;
