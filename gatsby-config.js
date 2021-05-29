const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: `Fastland Gatsby`,
  },
  // flags: {
  //   PRESERVE_FILE_DOWNLOAD_CACHE: true,
  //   PRESERVE_WEBPACK_CACHE: true,
  //   THE_FLAG: false,
  //   DEV_SSR: true,
  //   FAST_REFRESH: true,
  // },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages1`,
        path: `${__dirname}/src/pages/posts/ourMission`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages2`,
        path: `${__dirname}/src/pages/posts/caseStudy`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages3`,
        path: `${__dirname}/src/pages/posts/whoWeAre`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages3`,
        path: `${__dirname}/src/pages/posts/homepage`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages4`,
        path: `${__dirname}/src/pages/posts/whyUseUs`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`,`image`),
        // `${__dirname}/src/assets/image`
      },
    },
    
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-background-image`,
    `gatsby-transformer-remark`
  ],
}
