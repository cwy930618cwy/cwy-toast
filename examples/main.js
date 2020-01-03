import Vue from 'vue'
import App from './App.vue'

import './components/toast/index' // 引用本地包


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
