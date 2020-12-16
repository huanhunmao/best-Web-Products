# demo

> A Vue.js project.    
>
> 总体思路：
>
> 先npm install node_modules包（已删除），npm run dev，图片随意改，可自己加东西
>
> 扩展性较强，仔细写一下，有问题欢迎找我					

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

**1、*****\*构想 源于三部分\**** 

 ***\*1） 做一个可展示公司产品和合作公司业务的产品\****

 ***\*2） 有一个可视化的后台数据管理系统\****

 ***\*3） 后期这个区域展示的内容可以在地图上显示出来，并且可以定位（尚未实现）\****

 

 

**2、*****\*目的\**** 

***\*宣传公司的产品，加强合作公司的反馈和信息交流，汇总客户端问题，帮助分析问题解决\****

 

 

***\*3、菜鸡几点思考，感谢大佬查看和指导\****

 

***\*项目名称：\*******\*3D圈\****

***\*项目描述：\****搭建一个可以查看所有合作公司的3D打印机状况的软件，后期加入地图显示功能，可以完整查看区域地图。根据vue来进行网站框架搭建，HTML5+CSS3进行网页的布局 , 采用node.js来搭建后台环境

***\*技术栈\*******\*：\**** vue，vuex，vuerouter，element-ul，axios，betterScroll

***\*个人角色\*******\*：\****前端开发

***\*疑难杂症：\****1、使用keep-alive解决路由间跳转缓存问题，加入localStorage缓存默认信息，但后期发现浏览器兼容存在问题Mutations加入try{xxx}catch(e){xxx}捕获异常，同时exclude部分组件不缓存持续axios请求

​       2、对搜索框加入debounce防抖，对可拖动的图片进行throuttle节流操作，后续测试将设置时间改为300ms/100ms

​       3、开始使用fastClick解决300ms延迟问题，但后期测试发现多次重复点击报错，引入touch-action,加到reset.css里

4、解决documentElement.scrollTop部分浏览器不兼容加上document.body.scrollTop和window.pageYOffset

5、从父组件切换到子组件发现父组件滑动位置子组件也到对应位置，测试后添加scrollBehavior x/y=0解决，当切换路由时会进行位置初始化

6、使用递归组件形式，拿到ajax数据后展示多层级结构，可以展示3D打印子项产品

7、低版本手机白屏问题，使用babel-polyfill 解决

 