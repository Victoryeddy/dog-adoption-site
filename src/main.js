import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './plugins/AxiosForDogs'
import fakeUsersAxios from './plugins/axiosFileForFakeUsers'
import './assets/tailwind.css'



// Import the plugin here
import { Auth0Plugin } from './auth';

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain: process.env.VUE_APP_0AUTH_DOMAIN,
  clientId: process.env.VUE_APP_0AUTH_CLIENT_ID,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.prototype.$httpUsers = fakeUsersAxios;





new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
