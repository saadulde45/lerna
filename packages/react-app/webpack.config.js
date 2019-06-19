var path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = ({ mode } = { mode: "production" }) => {
    return {
        entry: './src/index.js',
        mode,
        optimization: {
            minimize: false,
        },
        target: 'node',
        externals: mode === "production" ? [nodeExternals()] : [],
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }, {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }]
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/',
            filename: 'index.js'
        },
        devServer: {
            contentBase: './dist'
        },
        resolve: {
            extensions: ['*', '.js', '.jsx', '.scss']
        }
    }
};