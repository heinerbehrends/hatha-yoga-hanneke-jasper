require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yogapraktijkgroningen.nl',
    title: 'Yogapraktijk Groningen',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yogapraktijk Groningen`,
        short_name: `Yogapraktijk`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `#538696`,
        display: `standalone`,
        icon: 'src/images/dahlia.png',
        icon_options: {
          purpose: `any maskable`,
        },
        cache_busting_mode: 'none',
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
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/src/images/*'],
        },
      },
    },
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-preact',
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
