const path = require('path');

const siteUrl = `https://www.factort.mx/`


module.exports = {
  siteMetadata: {
    siteUrl: siteUrl,
    title: "Factor T",
    description: 'Descripción Factor T',
    author: 'Factor T',
    social: {
      twitter: `factort`,
    },
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "5woujayw",
      "dataset": "production",
      token: process.env.SANITY_GATSBY,
      watchMode: true,
    }
  }, "gatsby-plugin-styled-components", "gatsby-plugin-gatsby-cloud", "gatsby-plugin-image", "gatsby-plugin-react-helmet", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/assets/images/"
    },
    __key: "images"
  }]
};