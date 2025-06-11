/** @type { import("next").NextConfig } */
const repo = 'bisidro.github.io';
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`
};

export default nextConfig;