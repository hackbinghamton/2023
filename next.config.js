module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  basePath: '/2023',
  // https://stackoverflow.com/a/70047180
  images: {
    loader: 'akamai',
    path: '/',
  },
};
