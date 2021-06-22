const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  env: {
    STRAPI_URL: process.env.STRAPI_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN
  },

  publicRuntimeConfig: {
    STRAPI_URL: process.env.STRAPI_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN
  },

  images: {
    domains: [process.env.IMAGES_DOMAIN],
    path: '/_next/image',
    loader: 'default'
  }  
}