const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  env: {
    STRAPI_URL: process.env.STRAPI_URL,
    NEXT_PUBLIC_IMAGES_DOMAIN: process.env.NEXT_PUBLIC_IMAGES_DOMAIN,
    HOST: process.env.NEXT_PUBLIC_HOST,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    REDIRECT_URI: process.env.REDIRECT_URI,
    REFRESH_TOKEN: process.env.REFRESH_TOKEN,
    MY_EMAIL: process.env.MY_EMAIL,
    EMAIL_SERVICE: process.env.EMAIL_SERVICE,
    AUTH_TYPE: process.env.AUTH_TYPE
  },

  publicRuntimeConfig: {
    STRAPI_URL: process.env.STRAPI_URL,
    NEXT_PUBLIC_IMAGES_DOMAIN: process.env.NEXT_PUBLIC_IMAGES_DOMAIN,
    HOST: process.env.NEXT_PUBLIC_HOST,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    REDIRECT_URI: process.env.REDIRECT_URI,
    REFRESH_TOKEN: process.env.REFRESH_TOKEN,
    MY_EMAIL: process.env.MY_EMAIL,
    EMAIL_SERVICE: process.env.EMAIL_SERVICE,
    AUTH_TYPE: process.env.AUTH_TYPE
  },

  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGES_DOMAIN],
    path: '/_next/image',
    loader: 'default'
  }  
}