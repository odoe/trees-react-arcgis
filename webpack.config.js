const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        bundle: [
            './src/js/app.js'
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loaders: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/index.html', to: 'index.html' }
        ])
    ]
};