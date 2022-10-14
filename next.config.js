/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['novotours.uz', "preview.colorlib.com", "i.pinimg.com", "www.advantour.com"],
  },
}

module.exports = nextConfig
