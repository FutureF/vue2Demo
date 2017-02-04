// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import routes from './config/routers'
import store from './vuex/store'
import App from './app'
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  created: function () {
    console.log("created ")
  },
  render: h => h(App)
}).$mount('#app')
