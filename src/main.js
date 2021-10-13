import Vue from 'vue'
import App from './App.vue'
// our Router is saved wherever it's instantiated
// that's because of our 'export default router' statement
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
