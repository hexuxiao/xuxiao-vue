const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//每次打包自动清理dist文件
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    //入口
    entry: './src/index.js',
    //出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    //loader
    module: {
        rules: [
            //解析es6语法
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            //打包css
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            //打包图片
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192 * 1000,
                        name: '[hash:7].[ext]'
                    }
                }]
            },
            //处理vue文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    //插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html'
        }),
        //清理dist文件夹插件
        new CleanWebpackPlugin(),
        //vue相关插件
        new VueLoaderPlugin(),
        //引入css
        new CopyPlugin([

            {
                from: path.resolve(__dirname, 'src/public'),
                to: path.resolve(__dirname, 'dist'),
                ignore: ['index.html'],
            }

        ]),
    ],
    //配置模式
    mode: 'development',
    //自动
    devServer: {
        port: 8080,
        open: true,
        quiet: true
    },
    //错误出现位置
    devtool: 'cheap-module-eval-source-map',
    //省略扩展名
    resolve: {
        extensions: [".js", ".json", ".vue"],
        //别名
        alias: {
            "@": path.resolve(__dirname, 'src')
        }
    }
};