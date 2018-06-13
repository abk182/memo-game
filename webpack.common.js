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
        filename: 'bundle.js',
        publicPath: "/"
    },
    module:{
        rules: [{
            test: [/\.js$/,/\.jsx$/], use: 'babel-loader', exclude: /node_modules/
        }]
    },
    plugins: [
        /*new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
            title: 'Production',
            filename: 'index1htm;.'
            template: './public/index.html'
        })*/
    ]
};