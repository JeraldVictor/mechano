import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// 3rd party libraries

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'animate.css/animate.css'

//file 

import routes from './routes/router'

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
