const path = require('path');
const webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        APP_DIR + '/index.jsx'
    ],
    output: {
        path : BUILD_DIR,
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            }
        ]
    },

    //***// DEVELOPMENT //***//
    mode: 'development',
    devtool : 'source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: BUILD_DIR,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
