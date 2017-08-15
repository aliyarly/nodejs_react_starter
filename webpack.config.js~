const webpack = require('webpack');
var fs = require("fs");

var nodeModules = {};
fs.readdirSync("node_modules")
  .filter(function(x) {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = "commonjs " + mod;
  })
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

var config = {
    devtool:'eval-source-map',
    target: ['node'],
    entry: {
        app: ['./views/index.js']
    },

    output: {
        path: './contents/dist',
        filename: '[name].js',
    },

    devServer: {
        contentBase: './contents/',
        publicPath: 'http://localhost:8080/dist/'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/, 
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015',]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {   test: /\.(png|jpg)$/, 
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    externals: nodeModules,
    resolve: {
      extensions: [ "", ".js", ".node"]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
config.target = webpackTargetElectronRenderer(config);
module.exports = config;
