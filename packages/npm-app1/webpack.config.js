var path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    optimization: {
        minimize: false,
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js'
    }
};