const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query LessonPagesQuery {
      allWpLes {
        nodes {
          id
          slug
          title
          content
          buttonTekst {
            buttonTekst
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  const lessonPages = result.data.allWpLes.nodes;
  console.log(lessonPages[0]);
  lessonPages.forEach((node) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve(`./src/layouts/lessonLayout.tsx`),
      context: { id: node.id },
    });
  });
};
