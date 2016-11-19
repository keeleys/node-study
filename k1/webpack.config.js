var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname+ '/dist',
        filename: "[name]-[hash].js"//打包后输出文件的文件名
    },
    module: {//在配置文件里添加JSON loader
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules!postcss'//添加对样式表的处理
            }
        ]
    },
    postcss: [
        require('autoprefixer')//调用autoprefixer插件
    ],
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("[name]-[hash].css")
    ],
    devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}