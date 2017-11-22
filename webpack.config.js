const webpack = require("webpack");
const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        sourceMapFilename: 'bundle.map'
    },
    watch: true,
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query:{
                    presets:['react', 'env', 'stage-1']
                }
            }
        ]
    }
};
