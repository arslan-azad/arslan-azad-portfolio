/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // `swcMinify` is no longer a valid next.config option in newer Next.js versions.
  // Leave minification to Next.js defaults / the selected bundler.
  turbopack: {},
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
    }
    return config
  },
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