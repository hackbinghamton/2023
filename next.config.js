module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/Xka5uUh",
        permanent: true,
      },
    ];
  },
  basePath: '/2022',
  images: {
    unoptimized: true
  }
};
