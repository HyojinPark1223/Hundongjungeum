import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import movable from "v-movable";

Vue.use(movable);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
