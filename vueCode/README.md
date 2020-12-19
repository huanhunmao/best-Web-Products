# vue-code

我的博客地址：https://huanhunmao.github.io/

> 如果对您有帮助，您可以点右上角 "Star" 支持一下

> 这个是一个在线编辑项目使用了 vscode 的 web 版编辑器 monaco-editor

---

##### 环境需求

1.  node >= 4.0.0
2.  npm >= 3.0.0

##### 技术栈

> [vue](https://github.com/vuejs/vue)

> [vue-resource](https://github.com/vuejs/vue-resource)

> [webpack](http://webpack.github.io/docs/)

> [monaco-editor](https://github.com/Microsoft/monaco-editor)

> [es6-babel](https://babeljs.io/docs/learn-es2015/)

### 使用方法

```bash
1、项目地址：（使用`git clone`）
2、我删除了 node_modules包，package.json里面有依赖，直接
    npm install安装  或者 cnpm install

```

### 开发

### 展示最主要的目录结构

<pre>
.
├── README.md           
├── dist                     // 项目build目录
├── config                   // 环境变量和入口，出口配置
├── libs                     // 参与打包的插件类库
├── static                   // 静态资源目录
├── build                    // 项目的配置文件目录
│   ├── build.js             // 打包的主入口
│   ├── check-version.js     // 检查输出打包库的版本
│   ├── dev-client.js        // 调试自动刷新配置
│   ├── dev-server.js        // 开发的服务配置
│   ├── utils.js             // 配置用到的工具类
│   ├── vue-loader.js        // vue文件加载配置
│   ├── webpack-base-conf.js // 基本的Webpack 配置文件
│   ├── webpack-dev-conf.js  // 开发的Webpack 配置文件
│   ├── webpack-prod-conf.js // 生产的Webpack 配置文件

├── package.json             // 项目配置文件
├── src                      // 生产目录
│   ├── assets               // css js 和图片资源
│   ├── components           // 各种组件
│   ├── config               // 项目配置
│   ├── router               // 项目路由 目前主要首页
│   ├── vs                   // vs编辑器主要文件夹
│   └── app.vue              // 根组件
│   └── main.js              // Webpack 预编译入口         
├── index.html               // 项目入口文件
.
</pre>
