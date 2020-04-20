# 总体来说需要一个流程 这个流程是需要安装某些包的流程 不是业务逻辑的流程

1. npm init -y
2. 创建.gitignore文件 不要把node_modules放到库里面
3. npm i -D webpack webpack-cli webpack-dev-server
4. 配置package.json中script  "dev":""webpack-dev-server --open chrome --config webpack.config.js"
5. 创建webpack.config.js文件 简单配置  执行webpack命令的地方 必须是webpack.config.js文件所在的目录
```javascript
    module.exports = {
        entry:{},
        output:{},
        module:{
            rules:[]    
        },
        plugins:[],
        mode:'development'      
}   
```
6. 在output命令里面配置 `[hash:8].js` 生成的js都不一样 我们需要先清除之前的js 因为每次生成的hash都不一样 不清除的话越来越多
npm i -D clean-webpack-plugin   
const { CleanWebpackPlugin } =  require('clean-webpack-plugin');
在plugins 里面直接 new CleanWebpackPlugin

7. npm i -D html-webpack-plugin  每次生成的hash 如果手动的引入的话非常麻烦 引入这个插件帮我们自动引入相关的js
如果你想指定生成的模板以哪个为基准的话  配置template

8. 处理css  npm i -D css-loader style-loader  并在module rules 中进行配置  里面的loader是从后向前执行的(注意)
我们采用这种方法执行完以后 css
```
 rules: [
            {
                test:/\.css$/,
                loader: ['style-loader','css-loader']
            }
        ]
```
9. npm i -D extract-text-plugin   插件作用：把css单独生成一个css文件  同样的需要在 plugin中进行配置  如果按照前面的安装在打包的时候
会有一个问题 百度下 就会发现是版本的问题  npm i  -D extract-text-webpack-plugin@next 就可以解决了 
会发现在配置里面有一个fallback 里面就

10. 因为项目中准备用sass 所以在这里一并安装了 
npm i -D sass-loader    因为sass-loader 依赖于node-sass  so   npm i -D node-sass 
安装完成以后需要配置 原项目中里面有css文件 一种是把css文件结尾的 打包进现有的配置项里面   
另一种就是
const extractCSS = new ExtractTextWebpackPlugin('main.css');
const extractSCSS = new ExtractTextWebpackPlugin('test.css'); // 配置scss-loader的时候 就用这个对象就可以了
注意 你这个还是需要在main.js中去引入的哦 9