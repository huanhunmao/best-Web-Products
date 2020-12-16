export default {
  changeCity(state, city) {
    // 意思是 将当前的城市来替换掉 之前state里面定义的city
    state.city = city
    // 将选择的城市 存在 localStorage.city里面 
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
