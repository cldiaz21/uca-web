module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    fallback: {
      ...config.resolve.fallback,
      path: false,
      os: false,
      crypto: false,
      stream: false,
      buffer: false
    }
  };
  return config;
};