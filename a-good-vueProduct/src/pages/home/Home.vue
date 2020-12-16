<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-company :list="weekendList"></home-company>
  </div>
</template>

<script>
// 引入组件
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeCompany from "./components/Company";
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "home",
  // 注册这个组件
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeCompany,
  },
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: "",
    };
  },
  computed: {
    ...mapState(["city"]),
  },
  // 这个里面定义方法
  methods: {
    getHomeInfo() {
      // 这个方法 获取数据地址 成功后执行后面的函数
      axios.get("/api/index.json?city=" + this.city).then(this.getHomeInfoSucc);
    },
    // 定义成功后的函数
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.data && res.ret) {
        this.swiperList = res.data.swiperList;
        this.iconList = res.data.iconList;
        this.recommendList = res.data.recommendList;
        this.weekendList = res.data.weekendList;
      }
    },
  },
  // 这个 vue 生命周期内的 一个函数 表示挂载完成
  // 完成后 执行上面的方法
  mounted() {
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  },
};
</script>

<style></style>
