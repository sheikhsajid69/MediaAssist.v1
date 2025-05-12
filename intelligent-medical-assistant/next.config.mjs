/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  // Skip ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Skip TypeScript checking during builds
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
  },
  // Note: remotePatterns is not supported with output: 'export'
};

export default nextConfig;
