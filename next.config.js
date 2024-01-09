/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: false, // it should be false by default 
    images: {
      domains: ['lh3.googleusercontent.com','collectionimagesalb.s3.sa-east-1.amazonaws.com'],
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config
    },
    
  }
  
  module.exports = nextConfig
  