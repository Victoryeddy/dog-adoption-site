import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './plugins/AxiosForDogs'
import fakeUsersAxios from './plugins/axiosFileForFakeUsers'
import './assets/tailwind.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.prototype.$httpUsers = fakeUsersAxios;





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
