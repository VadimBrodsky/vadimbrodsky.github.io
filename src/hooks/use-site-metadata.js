import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
