module.exports = {
  siteMetadata: {
    title: 'SWD Urethane',
    author: 'SWDADMIN',
    description: 'Swd urethane polyurethane technologies provides spray foam roofing systems and spray foam wall insulation',
    siteUrl: 'https://swdarchproducts.com'
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
    {
      
        resolve: `gatsby-plugin-google-analytics`,
        options: {
           trackingId: "UA-168691058-1",
        },
  },
  {
    resolve: `gatsby-plugin-styled-components`,
    options: {
      // Add any options here
    },
  },
    
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap'
    
  ],
  
}
