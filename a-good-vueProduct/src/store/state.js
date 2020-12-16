let defaultCity = '广州';
try {
  // 如果这个存在 就将默认值设为这个
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity,
}
