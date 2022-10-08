const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // env: {
  //   mongodb_username: "barneslow",
  //   mongodb_password: "Yl50hp4pqmAPuRQ2",
  //   mongodb_clustername: "cluster0",
  //   mongodb_database: "my-blog",
  // },
};

module.exports = nextConfig;
