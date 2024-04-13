/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias["react-pdf$"] =
        "react-pdf/dist/esm/entry.webpack.js";
    }
    return config;
  },
};

export default nextConfig;

// // next.config.js
// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.alias['react-pdf$'] = 'react-pdf/dist/esm/entry.webpack.js';
//     }
//     return config;
//   },
// };
