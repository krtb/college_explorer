import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import('../components/HelloWorld')
const Schools = () => import('../components/Schools')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/schools',
      name: 'Schools',
      component: Schools
    }
  ]
})
