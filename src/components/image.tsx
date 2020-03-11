import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = ({ src, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `);

  const match = React.useMemo(
    () =>
      data.allFile.edges.find(
        ({ node }) => src === node.relativePath.split('/').slice(-1)[0],
      ),
    [data, src],
  );

  return <Img fluid={match.node.childImageSharp.fluid} loadin="lazy" {...props} />;
};

export default Image;
