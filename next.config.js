const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  env: {
    STRAPI_URL: process.env.STRAPI_URL,
    NEXT_PUBLIC_IMAGES_DOMAIN: process.env.NEXT_PUBLIC_IMAGES_DOMAIN,
    HOST: process.env.NEXT_PUBLIC_HOST,
  },

  publicRuntimeConfig: {
    STRAPI_URL: process.env.STRAPI_URL,
    NEXT_PUBLIC_IMAGES_DOMAIN: process.env.NEXT_PUBLIC_IMAGES_DOMAIN,
    HOST: process.env.NEXT_PUBLIC_HOST,
  },

  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGES_DOMAIN],
    path: '/_next/image',
    loader: 'default'
  }  
}