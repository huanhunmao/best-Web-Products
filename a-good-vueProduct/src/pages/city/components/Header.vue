<template>
  <div>
    <div class="header">
      合作城市选择
      <router-link to="/">
        <div class="iconfont header-icon">&#xe771;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityHeader",
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  position: relative;
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;

  .header-icon {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 0.4rem;
    width: 0.64rem;
    text-align: center;
    color: #fff;
  }
}
</style>
