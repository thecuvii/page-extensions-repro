/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["tsx"], // error
  // pageExtensions:['tsx','ts'] // works
};

module.exports = nextConfig;
