module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                alias: {
                    shared: './src/shared',
                    screens: './src/screens',
                },
                extensions: ['.js', '.jsx', '.json'],
            },
        ],
    ],
};
