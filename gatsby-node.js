/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const {
    errors,
    data: {
      allMdx: { nodes: posts },
    },
  } = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (errors) {
    reporter.panic('Failed to create posts', result.errors);
  }

  posts.forEach((post) => {
    actions.createPage({
      path: `/posts/${post.frontmatter.slug}`,
      component: require.resolve('./src/templates/post.tsx'),
      context: {
        slug: post.frontmatter.slug,
        tldr: post.frontmatter.tldr,
      },
    });
  });
};
