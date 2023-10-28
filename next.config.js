/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (/** @type {import('webpack').Configuration} */ config) => {
    if (Array.isArray(config.externals)) {
      config.externals.push('@napi-rs/system-shutdown')
    } else {
      config.externals = ['@napi-rs/system-shutdown']
    }
    return config
  }
}

module.exports = nextConfig
