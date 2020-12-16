<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe771;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      产品详情
      <router-link to="/">
        <div class="iconfont header-fixed-icon">&#xe771;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll() {
      const top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = {
          opacity
        };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  // 使用keep-alive 之后 activated这个钩子函数会生效
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  // 页面切换后 解绑 事件
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
    // 页面展示一个圆圈
    position:absolute
    left:.2rem
    top:.2rem
    width:.8rem
    height:.8rem
    line-height 0.8rem
    text-align:center
    border-radius:.4rem
    background:rgba(0,0,0,.8)
    .header-abs-back
        color:#fff
        font-size:.4rem
.header-fixed
    z-index:2
    position:fixed
    top:0
    left:0
    right:0
    height: $headerHeight
    line-height:$headerHeight
    text-align:center
    color:#fff
    background:$bgColor
    font-size:.32rem
    .header-fixed-icon
        position:absolute
        top:0
        left:0
        font-size:.4rem
        width:.64rem
        text-align:center
        color:#fff
</style>
