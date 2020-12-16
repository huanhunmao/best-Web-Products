import Vue from "vue";
import Router from "vue-router";
// import Home from ''
// import City from ''
// import Detail from ''
Vue.use(Router);
export default new Router({
  routes: [{
      path: "/",
      name: "Home",
      // component:Home,
      // 其实不需要 异步组件的形式引入 ！！！！
      // 仅测试功能
      component: () => import("@/pages/home/Home.vue")
    },
    {
      path: "/city",
      name: "City",
      // component: City
      component: () => import("@/pages/city/City.vue")
    },
    {
      // 路由后面是/detail/后面跟的参数动态绑定到id
      path: "/detail/:id",
      name: "Detail",
      // component: Detail
      component: () => import("@/pages/detail/Detail.vue")
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  }
});
