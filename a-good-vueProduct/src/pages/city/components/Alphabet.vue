<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      // 返回的结果大概是 ['A','B','C'....]这样的数组
      return letters;
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleLetterClick(e) {
      // 事件传给父组件 内容是e.target.innerText
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      // 触摸开始时
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      // 只有等于true时 才做事件处理
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          // 打印出A距离顶部绿色 底部的高度
          // const startY = this.$refs["A"][0].offsetTop;
          // 减去了 71 是因为 这个touchY算出来的是距离顶部的高度
          // 减去 71 指的是减掉 上面绿色的部分
          const touchY = e.touches[0].clientY - 71;
          //  这样就可以算出 每个字母的位置  第几个
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 4);
      }
    },
    handleTouchEnd() {
      // 触摸结束时
      this.touchStatus = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
    display:flex
    flex-direction:column
    justify-content:center
    position:absolute
    top:1.58rem
    right:0
    bottom:0
    width:.4rem
    .item
        text-align:center
        color:$bgColor
        line-height:.4rem
</style>
