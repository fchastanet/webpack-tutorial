import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const router = new Router({
  history: true,
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(
        /* webpackChunkName: "home" */
        "../pages/Home.vue"
      )
    },
    {
      path: '/app1',
      name: 'app1',
      component: () => import(
        /* webpackChunkName: "app1" */
        "../pages/App1.vue"
      ),
      meta: {
        title: 'Application 1'
      }
    },
    {
      path: '/app2',
      name: 'app2',
      component: () => import(
        /* webpackChunkName: "app2" */
        "../pages/App2.vue"
      ),
      meta: {
        title: 'Application 2'
      }
    }
  ]
})

export default router
