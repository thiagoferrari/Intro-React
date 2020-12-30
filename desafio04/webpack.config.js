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
            },
            {
                test: /\.css$/,
                use: [ // trabalhando com loader de css...
                    { loader: 'style-loader' },  // ele serve para importar files .css
                    { loader: 'css-loader' } // ele serve para imports especiais (.png, @import css externos)
                ]
            }, {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: {
                    loader: 'file-loader' //serve para controlar a extensão da imagem!
                }
            }
        ]
    }
}; 