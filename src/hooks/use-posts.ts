import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            title
            slug
            tldr
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map(({ id, frontmatter: { title, slug, tldr } }) => ({
    id,
    title,
    slug,
    tldr,
  }));
};

export default usePosts;
