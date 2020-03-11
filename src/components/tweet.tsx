import * as React from 'react';

const Tweet = ({ handle, link, date, children }) => (
  <blockquote className="text-sm leading-normal italic text-md border-solid border-l-8 border-gray-600 pl-4">
    {children}
    <p className="text-left mt-5 text-xs">
      &mdash; @{handle} on <a href={link}>{date}</a>
    </p>
  </blockquote>
);

export default Tweet;
