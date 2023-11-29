/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictModeをオフ
    reactStrictMode: false,
    webpack: (config) => {
        config.resolve.alias = {
          ...(config.resolve.alias || {}),
          // Transform all direct `react-native` imports to `react-native-web`
          'react-native$': 'react-native-web',
        }
        return config
    },
    env: {
        APP_ENV: process.env.APP_ENV,
        API_URL: process.env.API_URL,
        FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
        FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
        FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
        FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
        FIREBASE_MESSEGING_SENDER_ID: process.env.FIREBASE_MESSEGING_SENDER_ID,
        FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
        SESSION_NAME: process.env.SESSION_NAME
    },
}

module.exports = nextConfig
