var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './src/index.js']
    },

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        loaders: [
            {
                test:   /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            },

            {
                test: /\.js$/,
                include: __dirname + '/src',
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },

    postcss: function () {
        return [
            require("postcss-cssnext")()
        ];
    },

    plugins: [
        // new webpack.optimize.CommonsChunkPlugin("commons", "commons.js"),
        new ExtractTextPlugin("[name].css"),
        HTMLWebpackPluginConfig
    ]
}
