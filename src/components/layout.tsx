import * as React from 'react';

import useSiteMetadata from '../hooks/use-site-metadata';
import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();
  // <footer>© {new Date().getFullYear()}, Built with</footer>

  return (
    <>
      <Header siteTitle={title} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
