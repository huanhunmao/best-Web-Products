<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe771;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe602;</span>
      输入区域/合作公司
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont arrow-icon">&#xeb6d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeHeader",
  computed: {
    ...mapState(["city"]),
  },
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  display: flex;
  line-height: $headerHeight;
  background: $bgColor;

  .header-left {
    float: left;
    width: 0.64rem;

    .back-icon {
      font-size: 0.5rem;
      text-aligin: center;
      color: #fff;
    }
  }

  .header-input {
    flex: 1;
    background: #fff;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    height: 0.64rem;
    line-height: 0.64rem;
    border-radius: 0.1rem;
    color: #ccc;
  }

  .header-right {
    float: right;
    min-width: 1.04rem;
    padding: 0 0.1rem;
    text-align: center;
    color: #fff;

    .arrow-icon {
      font-size: 0.24rem;
      margin-left: -0.04rem;
    }
  }
}
</style>
