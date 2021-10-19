import Vue from 'vue'
import App from './App.vue'
import vueMoment from 'vue-moment' 
import router from "./router.js"
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "@/fontAwesomeIcon.js";


Vue.use(BootstrapVue)

Vue.use(vueMoment)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
