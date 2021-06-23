const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  env: {
    STRAPI_URL: process.env.STRAPI_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
    IMAGES_DOMAIN: process.env.NEXT_PUBLIC_HOST,
  },

  publicRuntimeConfig: {
    STRAPI_URL: process.env.STRAPI_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
    IMAGES_DOMAIN: process.env.NEXT_PUBLIC_HOST,
  },

  images: {
    domains: [process.env.IMAGES_DOMAIN],
    path: '/_next/image',
    loader: 'default'
  }  
}