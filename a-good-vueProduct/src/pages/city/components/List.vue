<template>
  <div class="list" ref="wrapper">
    <div>
      <!-- 第一个区域 -->
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.city }}</div>
          </div>
        </div>
      </div>
      <!-- 第二个区域 -->
      <div class="area">
        <div class="title border-topbottom">合作城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <!-- 第三个区域 -->
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "CityList",
  computed: {
    ...mapState(["city"]),
  },
  // 接收父组件数据
  props: {
    cities: Object,
    hot: Array,
    letter: String,
  },
  methods: {
    handleCityClick(city) {
      // 组件到actions 传递 需要 dispatch方法
      // 会将changeCity派发到 actions里面
      // 这里直接使用 commit 组件---> mutations
      // this.$store.commit("changeCity", city);
      this.changeCity(city);
      // 点击后跳转到首页
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"]),
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper, { click: true });
  },
  updated() {
    this.scroll.refresh();
  },
  // 加一个监听器
  watch: {
    letter() {
      if (this.letter) {
        // console.log(this.letter);
        // 获取元素
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  right: 0;
  left: 0;
  bottom: 0;

  .border-topbottom {
    &:before {
      border-color: #ccc;
    }

    &:after {
      border-color: #ccc;
    }
  }

  .border-bottom {
    &:before {
      border-color: #ccc;
    }
  }

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
