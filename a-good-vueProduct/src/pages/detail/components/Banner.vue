<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg" class="banner-img" />
      <div class="banner-info">
        <div class="banner-title">
          {{ this.sightName }}
        </div>
        <div class="banner-number">
          <!-- 拿一个之前用过的小图标 -->
          <span class="iconfont">&#xe623;</span>
          {{ this.bannerImgs.length }}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary
        :imgs="bannerImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      ></common-gallary>
    </fade-animation>
  </div>
</template>
<script>
import CommonGallary from "common/gallary/Gallary";
import FadeAnimation from "common/gallary/fade/FadeAnimation";
export default {
  name: "DetailBanner",
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data() {
    return {
      showGallary: false
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
};
</script>
<style lang="stylus" scoped>
.banner
    position:relative
    overflow:hidden
    height:0
    padding-bottom:55%
    .banner-img
        width:100%
    .banner-info
        display:flex
        position:absolute
        left:0
        right:0
        bottom:0
        line-height:.6rem
        color:#fff
        // 渐变色
        background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
        .banner-title
            flex:1
            font-size .36rem
            padding:0 .2rem
        .banner-number
            padding: 0 .4rem
            height:.4rem
            line-height:.4rem
            border-radius:.2rem
            background:rgba(0,0,0,.7)
            font-size:.36rem
            text-align:right
            margin-top:.1rem
</style>
