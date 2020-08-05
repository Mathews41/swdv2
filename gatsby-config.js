module.exports = {
  siteMetadata: {
    title: 'SWD Urethane',
    description: 'Swd urethane provides spray foam roofing systems and spray foam wall insulation',
    siteUrl: 'https://swdarchproducts.com',
    image: 'src/images/icon.jpg',
    author: 'swdurethane'
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
  // {
  //   resolve: "gatsby-plugin-guess-js",
  //   options: {
  //     // Find the view id in the GA admin in a section labeled "views"
  //     GAViewID: `VIEW_ID`,
  //     // Add a JWT to get data from GA
  //     jwt: {
  //       client_email: `GOOGLE_SERVICE_ACCOUNT_EMAIL`,
  //       private_key: `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`,
  //     },
  //     minimumThreshold: 0.03,
  //     // The "period" for fetching analytic data.
  //     period: {
  //       startDate: new Date("2020-7-1"),
  //       endDate: new Date(),
  //     },
  //   },
  // },
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
