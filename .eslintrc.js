module.exports = {
    root: true,
    extends: '@react-native',
    plugins: ['react-hooks'],
    rules: {
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.tsx'],
            },
        ],
        'react/react-in-jsx-scope': 'off',
    },
};
