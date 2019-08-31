import Vue from 'vue'
import Router from 'vue-router'

const Test = resolve => require(['../views/Test'], resolve)

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Test,
    }
  ]
})

export default router;
