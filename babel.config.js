module.exports = {
    presets: [
        "@babel/preset-env", // faz browser entender import/export, arrow functions, classes
        "@babel/preset-react", // faz browser entender novas features do React [ex.: JSX]
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties'
    ]
}