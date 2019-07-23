import * as React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteTitle = '' }) => (
  <header>
    <h1 style={{ margin: 0 }}>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </header>
);

export default Header;
