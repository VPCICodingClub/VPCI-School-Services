const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require("vue-loader"); // Needed otherwise the page says 'Cannot GET /'
const mode = process.env.NODE_ENV || 'development';

module.exports = {
    mode,
    entry: './app/index.js', // The entry for the front end.
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
            Lib: path.resolve(__dirname, '../app/lib'), // The internal api is put in this folder so that it can be accessed anywhere with the alias.
            Assets: path.resolve(__dirname, '../assets'),
        }
    },
    output: {
        filename: '[fullhash].index.js', // The bundled file made by webpack
        path: path.resolve(__dirname, '../build'),
        clean: true,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html'
        }),
        new webpack.DefinePlugin({ // Vue wants these globals to be defined, otherwise there's a warning.
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
        }),
        new VueLoaderPlugin(),
    ],
};
