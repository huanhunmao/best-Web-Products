<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
import axios from "axios";
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
export default {
  name: "City",
  //   引入组件一定需要 使用 components注册
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    };
  },
  methods: {
    // 这个函数 是 ajax请求到city.json数据后 调用handle方法
    getCityInfo() {
      axios.get("/api/city.json").then(this.handleGetCityInfoSucc);
    },
    // 拿到结果 并且处理结果
    handleGetCityInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        this.cities = res.data.cities;
        this.hotCities = res.data.hotCities;
      }
    },
    handleLetterChange(letter) {
      this.letter = letter;
    }
  },
  mounted() {
    this.getCityInfo();
  }
};
</script>

<style lang="stylus" scoped></style>
