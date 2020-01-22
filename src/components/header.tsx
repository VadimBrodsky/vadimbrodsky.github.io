import * as React from 'react';
import { Link } from 'gatsby';

import Logo from './logo';

const Header = ({ siteTitle = '' }) => (
  <header className="my-10 container mx-auto">
    <h1 className="py-5">
      <Link to="/" className="block text-center">
        <Logo className="mx-auto" />
        <span className="sr-only">{siteTitle}</span>
      </Link>
    </h1>

    <nav className="lowercase font-monospace font-medium text-center text-lg">
      <ul>
        <li className="inline">
          <Link to="/blog">Blog</Link> /{' '}
        </li>
        <li className="inline">
          <Link to="/projects">Projects</Link> /{' '}
        </li>
        <li className="inline">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
