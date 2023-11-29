const path = require('path');
module.exports = async ({ config }) => {
    config.resolve.alias = {
        ...config.resolve.alias,
        'react-native$': 'react-native-web',
        '@': path.resolve(__dirname, '../src'),
    };
    return config;
};
