const path = require('path')
//const CleanWebpackPlugin = require('clean-webpack-plugin') //очищает директорию
//const HtmlWebpackPlugin = require('html-webpack-plugin') //создает index.html
//const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
    entry: {
        app: [path.join(__dirname,'./game/main.js')]
    },
    output: {
        path: path.join(__dirname,'./public/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.js?$/],
                include: path.resolve(__dirname, './game'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react']
                    },
                },
            },
        ],
    },
};