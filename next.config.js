const withPWA = require('next-pwa');
const isGithubActions = process.env.GITHUB_ACTIONS || false
let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = /* withPWA( */{
  assetPrefix: assetPrefix,
  basePath: basePath,
  env: {
    NEXT_PUBLIC_RESUME_LINK: '1Y5ttDgKB_Q3NVjPe5lzKZxYOrP7nEX5v',
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: ['i.ibb.co'],
  },
  experimental: {
    publicDirectory: true,
  },
}/* ) */;
