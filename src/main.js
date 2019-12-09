import Vue from 'vue'
import App from './App.vue'
import Login from './Permissions.vue'

Vue.component('test',Login);
// import VueRouter from 'vue-router'
// import routes from './routes/routes.js';
// Vue.use(VueRouter)

// const router = new VueRouter({
//   // mode: 'history',
//   routes, // short for routes: routes
// })

new Vue({
  el: '#app',
  render: h => h(App),
  // router
})
