import { graphql } from 'gatsby';

export const HomeQuery = graphql`
  query HomePageQuery {
    wpPage(title: { eq: "Wat kan hatha yoga voor je doen?" }) {
      title
      overHathaYoga {
        titel0
        inhoud0
        afbeelding0 {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: NONE
                width: 300
                height: 300
                layout: CONSTRAINED
              )
            }
          }
        }
        titel2
        inhoud2
        afbeelding2 {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: NONE
                width: 300
                height: 300
                layout: CONSTRAINED
              )
            }
          }
        }
        titel3
        inhoud3
        afbeelding3 {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: NONE
                width: 300
                height: 300
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
    allWpLes {
      nodes {
        title
        excerpt
        slug
        buttonTekst {
          buttonTekst
        }
      }
    }
  }
`;
