const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: { // local onde vai ser lançado o bundle [todos códigos unidos] para o babel
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public")
    },
    module: {
        rules: [ // aqui: vamos usar o babel só para files .js [css usaremos outro loader]
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};