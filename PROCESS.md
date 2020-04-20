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
6. 在output命令里面配置 `[hash:8].js` 生成的js都不一样 我们需要先清除之前的jss