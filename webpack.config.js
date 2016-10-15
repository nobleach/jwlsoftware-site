var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: ['webpack/hot/dev-server', './src/index.js']
    },

    output: {
        filename: "dist/bundle.js"
    },

    module: {
        loaders: [
            {
                test:   /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    devServer: {
        inline: true,
        hot: true
    },

    postcss: function () {
        return [
            require("postcss-cssnext")()
        ];
    },

    plugins: [
        // new webpack.optimize.CommonsChunkPlugin("commons", "commons.js"),
        new ExtractTextPlugin("[name].css")
    ]
}
