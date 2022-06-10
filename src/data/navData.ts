export type NavItemsData = {
  allWpLes: {
    nodes: {
      title: string;
      slug: string;
      extraVelden: { menuTekst: string };
    }[];
  };
};

export const navData = {
  allWpLes: {
    nodes: [
      {
        title: 'Groepslessen',
        slug: 'groepslessen',
        extraVelden: { menuTekst: 'Groepslessen' },
      },
      {
        title: 'Individuele lessen',
        slug: 'individuele-lessen',
        extraVelden: { menuTekst: 'Individuele Lessen' },
      },
      {
        title: 'Lessen voor kinderen',
        slug: 'voor-kinderen',
        extraVelden: { menuTekst: 'Voor kinderen' },
      },
      {
        title: 'Lessen voor bedrijven',
        slug: 'voor-bedrijven',
        extraVelden: { menuTekst: 'Voor bedrijven' },
      },
    ],
  },
};
