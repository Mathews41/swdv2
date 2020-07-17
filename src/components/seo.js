// import React from "react"
// import PropTypes from "prop-types"
// import { Helmet } from "react-helmet"
// import { useLocation } from "@reach/router"
// import { useStaticQuery, graphql } from "gatsby"

// export const SEO = ({ title, description, image, url, author }) => {
//     return (
//         <StaticQuery
//             query={detailsQuery}
//             render={data => {
//                 const metaDescription = description || data.site.siteMetadata.description
//                 const metaTitle = title || data.site.siteMetadata.title
//                 const metaAuthor = author || data.site.siteMetadata.author
//                 const metaUrl = url || data.site.siteMetadata.url
//                 const metaImage = image || data.site.siteMetadata.image
//                 const metaKeywords = keywords || ["Swd urethane", "Spray foam","architects","spray foam roofing","spray foam insulation","polyurethane technologies","swd arch products","quikshield","swd","pour foam"," LEED","green building","construction","industrial products"]
//                 return (
//                     <Helmet
//                     title={title}
//                     meta={[
//                         {
//                             name: `description`,
//                             content: metaDescription,
//                         },
//                         {
//                             property: `og:title`,
//                             content: metaTitle,
//                         },
//                         {
//                             property: `og:description`,
//                             content: metaDescription,
//                         },
//                         {
//                             property: `og:type`,
//                             content: `website`,
//                         },
//                         {
//                             property: `og:image`,
//                             content: metaImage,
//                         },
//                         {
//                             property: `og:url`,
//                             content: metaUrl,
//                         },
//                         {
//                             property: `description`,
//                             content: metaDescription,
//                         },
//                         {
//                             property: `description`,
//                             content: metaDescription,
//                         },
                        
//                     ].concat (
//                         metaKeywords && metaKeywords.length > 0 ? {
//                             name: `keywords`,
//                             content: metaKeywords.join(`, `),
//                         }
//                         :
//                         []
//                     )}
//                 />
//             )
//         }}
//         />
//     )
// }

// const detailsQuery = graphql`
// query DefaultSEOQuery {
//     site{
//         siteMetadata {
//             title
//             description
//             author
//             image
//         }
//     }
// }
