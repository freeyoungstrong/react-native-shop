module.exports = {
    preset: 'react-native',
    transform: {
        '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    },
    modulePaths: ['<rootDir>', '<rootDir>/node_modules'],
    moduleNameMapper: {
        '^shared/(.*)$': '<rootDir>/src/shared/$1',
        '^screens$': '<rootDir>/src/screens',
        '^screens/(.*)$': '<rootDir>/src/screens/$1',
    },
    transformIgnorePatterns: [
        '<rootDir>/node_modules/(?!react-native|native-base|react-navigation|@react-navigation|react-native-fabric|@react-native-community|enzyme-to-json|react-native-share)',
    ],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    cacheDirectory: '<rootDir>/.jest/cache',
    setupFiles: ['<rootDir>/jest-setup.js'],
    collectCoverage: true,
    coverageDirectory: '<rootDir>/output/coverage/jest',
    collectCoverageFrom: ['src/**/**/*.(jsx|js)'],
    coverageReporters: ['html'],
};
