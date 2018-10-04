module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter with Styled Components',
    description: 'Gatsby Starter with Styled Components',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby Starter with Styled Components',
        short_name: 'Gatsby Starter',
        start_url: '/',
        background_color: '#171c28',
        theme_color: '#1d2433',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
  ],
};
