require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Hatha Yoga Hanneke Jasper',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hatha Yoga Hanneke Jasper`,
        short_name: `HYHJ`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `#A3BCA9`,
        display: `standalone`,
        icon: 'src/images/dahlia.png',
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: 'http://hathayoga.webopbouw.nl/graphql',
        schema: {
          perPage: 20, // currently set to 100
          requestConcurrency: 1, // currently set to 15
          previewRequestConcurrency: 2, // currently set to 5
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/, // See below to configure properly
        },
      },
    },
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
