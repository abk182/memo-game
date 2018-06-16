const path = require('path')

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