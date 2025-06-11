/** @type { import("next").NextConfig } */
const repo = 'bisidro.github.io';

module.exports = {
  output: 'export',
  images: { unoptimized: true },
  //basePath: `/${repo}`,
  assetPrefix: `/${repo}/`
};