const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextWebpackPlugin('main.css');
const extractSCSS = new ExtractTextWebpackPlugin('test.css');


module.exports = {
    entry: {
        main: './main.js'
    },
    output: {
        filename: `[hash:8].js`,
        path: path.resolve(__dirname,'./dist')
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use: extractCSS.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                }),
            },
            {
                test:/\.scss$/,
                use:extractSCSS.extract({
                    fallback: 'style-loader',
                    use:['css-loader','sass-loader']
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html')
        }),
        extractCSS,
        extractSCSS
    ],
    mode: "development"
};