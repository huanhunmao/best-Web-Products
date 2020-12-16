<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>

    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
import axios from "axios";
export default {
  name: "Detail",
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      list: []
    };
  },
  methods: {
    getDetailInfo() {
      axios
        .get("./api/detail.json", {
          // 并且拿到 对应的ID
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.handleGetDataSucc);
    },
    handleGetDataSucc(res) {
      res = res.data;
      //拿到完整数据
      if (res.ret && res.data) {
        const data = res.data;
        // console.log(data);
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.list = data.categoryList;
      }
    }
  },
  mounted() {
    this.getDetailInfo();
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
};
</script>

<style lang="stylus" scoped>
.content
    height:50rem
</style>
