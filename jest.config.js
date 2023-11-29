const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
  // // react-nativeをトランスパイル対象にする
  // "transformIgnorePatterns": [
  //   // "node_modules/(?!(jest-)?react-native"
  //   "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)"
  // ],
})

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)