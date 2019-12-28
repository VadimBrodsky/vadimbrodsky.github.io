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
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map((post) => ({
    id: post.id,
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
  }));
};

export default usePosts;
