import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import Vuex from 'vuex'
// import store from './store'


Vue.use(ElementUI)
// vue.use(Vuex)

Vue.config.productionTip = false

axios.defaults.withCredentials=true
// axios.defaults.baseURL = "http://182.92.232.233:8883/"
Vue.prototype.$http = axios
// axios.defaults.proxy.host='182.92.232.233'
// axios.defaults.proxy.port=8883

// axios.defaults.headers.post['Content-Type']="application/json";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
