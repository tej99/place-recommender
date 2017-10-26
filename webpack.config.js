const webpack = require("webpack");
const path = require('path');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        filename: 'dist/bundle.js',
        sourceMapFilename: 'dist/bundle.map'
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query:{
                    presets:['react', 'env']
                }
            }
        ]
    }
};
