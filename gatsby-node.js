const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const resultLessons = await graphql(`
    query LessonPagesQuery {
      wpPage(isFrontPage: { eq: true }) {
        contactgegevens {
          adres
          emailadres
          telefoonnummer
          telefonischBereikbaar
          kvkNummer
        }
      }
      allWpLes {
        nodes {
          id
          slug
          title
          content
          extraVelden {
            buttonTekst
          }
        }
      }
    }
  `);
  if (resultLessons.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  const lessonPages = resultLessons.data.allWpLes.nodes;
  const contactData = resultLessons.data.wpPage.contactgegevens;
  lessonPages.forEach((node) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve(`./src/layouts/lessonLayout.tsx`),
      context: { id: node.id, title: node.title, contactData },
    });
  });

  // const resultPosts = await graphql``;
};
