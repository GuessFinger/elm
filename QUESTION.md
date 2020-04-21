# 实际开发中所有的问题记录

Q:  webpack安装好以后 执行命令webpack -v 没有效果 
A:  webstorm 清除缓存 重启

Q:  package-lock.json文件是干什么用的？？？  
A:  不同的时间点npm执行所安装的包的版本是不一样的 库是不断更新的 这个文件记录的就是你当前安装的版本 [参考链接](https://www.cnblogs.com/cangqinglang/p/8336754.html)

Q:  安装包的时候所有的字母都是小写  我们再需要require 前面定义的包 首字母必须大写
A:

Q:  为什么在安装CleanWebpackPlugin的时候 带上{}
A:  在查看require里面的包 发现这个包里面export 就是带{}的   其他的包就直接导出的是这个包

Q:  extract-text-webpack-plugin 配置的时候 fallback的意思？
A:  编译后我们用什么css 来提取css文件

Q:  在安装node-sass的时候可能会安装失败？？？
A:  npm install -g nrm  然后   nrm ls   然后 nrm use taobao 我们用taobao的镜像


Q:  其实在配置extract-text-webpack-plugin  配置scss的时候 查看官网中就有配置说明
A:

Q:  有时候很懵逼 我的loader该怎么进行配置呢？  
A:  要是不知道loader怎么进行配置的话 就去查看它的官网 上面一定会有介绍的

Q:
A:

Q:
A: