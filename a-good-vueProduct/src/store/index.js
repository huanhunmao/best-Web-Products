import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

// vue 使用这个插件 Vuex
Vue.use(Vuex)


// 导出的是这个 Vuex.Store里面的内容
export default new Vuex.Store({
  state,
  // {
  //   // 默认城市写北京
  //   // 先在 localStorage.city找 如果有把这个当成默认数据
  //   city: defaultCity,

  // },
  // actions: {
  //   // 接收这个changeCity
  //   changeCity(ctx, city) {
  //     // 通过 ctx.commit()将需要传递的东西 给mutations
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations,
  // getters: {
  //   doubleCity(state) {
  //     return state.city + '' + state.city
  //   }
  // }
  // {
  //   changeCity(state, city) {
  //     // 意思是 将当前的城市来替换掉 之前state里面定义的city
  //     state.city = city
  //     // 将选择的城市 存在 localStorage.city里面 
  //     try {
  //       localStorage.city = city
  //     } catch (e) {}

  //   }
  // }
})
