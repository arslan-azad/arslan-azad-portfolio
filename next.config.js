/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Using Turbopack (default in Next.js 16)
  // Path alias configured in tsconfig.json
  turbopack: {},
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'azadperspective.com',
          },
        ],
        destination: 'https://www.azadperspective.com/:path*',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig 