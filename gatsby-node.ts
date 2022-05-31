const path = require('path');
import { groepslessenData } from './src/data/paginas/groepslessenData';
import { individueleLessenData } from './src/data/paginas/individueleLessenData';
import { voorBedrijvenData } from './src/data/paginas/voorBedrijvenData';
import { voorKinderenData } from './src/data/paginas/voorKinderenData';

exports.createPages = async ({ actions, reporter }) => {
  const { createPage } = actions;
  const pages = await Promise.resolve([
    groepslessenData,
    individueleLessenData,
    voorBedrijvenData,
    voorKinderenData,
  ]);

  pages.forEach((page) => {
    createPage({
      path: page.slug,
      component: path.resolve(`src/layouts/lessenLayout.tsx`),
      context: { title: page.title },
    });
  });
  // const resultLessons = await graphql(`
  //   query LessonPagesQuery {
  //     allWpLes {
  //       nodes {
  //         id
  //         slug
  //         title
  //       }
  //     }
  //   }
  // `);
  // const resultLessons = {
  //   data: {
  //     allWpLes: {
  //       nodes: [
  //         { id: '1', slug: 'groepslessen', title: 'Groepslessen' },
  //         { id: '2', slug: 'voor-bedrijven', title: 'Lessen voor bedrijven' },
  //         { id: '3', slug: 'individuele-lessen', title: 'Individuele lessen' },
  //         { id: '4', slug: 'voor-kinderen', title: 'Lessen voor kinderen' },
  //       ],
  //     },
  //   },
  // };
  // if (resultLessons.errors) {
  //   reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  // }
  // const lessonPages = resultLessons.data.allWpLes.nodes;
  // lessonPages.forEach((node) => {
  //   createPage({
  //     path: `/${node.slug}`,
  //     component: path.resolve(`./src/layouts/lessonLayout.tsx`),
  //     context: { id: node.id, title: node.title },
  //   });
  // });
};
