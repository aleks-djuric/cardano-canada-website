module.exports = {
  siteMetadata: {
    title: 'Cardano Canada',
    description: 'Canadian stake pool operator'
  },
  plugins: [
    'gatsby-plugin-top-layout',
    'gatsby-plugin-material-ui',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-material-ui',
    'gatsby-plugin-twitter',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-remark-reading-time`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: `${__dirname}/src`,
        assets: `${__dirname}/src/assets`,
        components: `${__dirname}/src/components`,
        pages: `${__dirname}/src/pages`,

      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Cardano Canada',
        short_name: 'Cardano Canada',
        start_url: '/',
        background_color: '#FD0000',
        theme_color: '#FD0000',
        display: 'minimal-ui',
        icon: 'src/assets/img/cardano-canada-logo.png',
      },
    },
  ],
}
