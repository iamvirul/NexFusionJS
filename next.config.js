const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['@/components'] = path.join(__dirname, 'src/client/components');
      config.resolve.alias['@/styles'] = path.join(__dirname, 'src/client/styles');
    }
    return config;
  },
};
