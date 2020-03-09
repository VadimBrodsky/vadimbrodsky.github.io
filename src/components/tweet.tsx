import * as React from 'react';

const Tweet = ({ handle, link, date, children }) => (
  <blockquote className="leading-normal italic text-md">
    {children}
    <p className="text-left">
      &mdash; @{handle} on <a href={link}>{date}</a>
    </p>
  </blockquote>
);

export default Tweet;
