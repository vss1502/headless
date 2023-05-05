/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wordpress-693833-3486433.cloudwaysapps.com',
        port: '',
        pathname: '/**'
      }
      

    ]
  }
}

module.exports = nextConfig