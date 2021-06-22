export function getStrapiURL(path = "") {
    return `${
      process.env.STRAPI_URL
    }${path}`;
  }