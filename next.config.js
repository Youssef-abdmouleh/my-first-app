/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains:["https://picsum.photos","api.lorem.space","firebasestorage.googleapis.com"],
}
}

module.exports = nextConfig
