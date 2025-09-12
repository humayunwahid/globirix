/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blogs.globirix.com",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com", // for author_pic
      },
    ],
  },
}

module.exports = nextConfig
