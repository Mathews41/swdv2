module.exports = {
  siteMetadata: {
    title: 'SWD',
    author: 'Mark Mathews',
    description: 'Swd urethane polyurethane technologies provides spray foam roofing systems and spray foam wall insulation',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    
    'gatsby-plugin-sass',
    
  ],
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "G-SPP7VKQVGV",
      },
    },
  ],
}
