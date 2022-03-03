const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const resultLessons = await graphql(`
    query LessonPagesQuery {
      allWpLes {
        nodes {
          id
          slug
          title
        }
      }
    }
  `);
  if (resultLessons.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  const lessonPages = resultLessons.data.allWpLes.nodes;
  lessonPages.forEach((node) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve(`./src/layouts/lessonLayout.tsx`),
      context: { id: node.id, title: node.title },
    });
  });

  // const resultPosts = await graphql``;
};
