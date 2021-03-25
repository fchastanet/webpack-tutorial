import Vue from 'vue'
import Router from 'vue-router'

import Home from "../pages/Home.vue";
import App1 from "../pages/App1.vue";
import App2 from "../pages/App2.vue";

Vue.use(Router)

const router = new Router({
  history: true,
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/app1',
      name: 'app1',
      component: App1,
      meta: {
        title: 'Application 1'
      }
    },
    {
      path: '/app2',
      name: 'app2',
      component: App2,
      meta: {
        title: 'Application 2'
      }
    }
  ]
})

export default router
