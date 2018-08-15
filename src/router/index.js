import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/login'
import Index from '../pages/main/index'
import Canvas from '../components/canvas'
import Chart from '../components/charts/index'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:"/",
      name:'index',
      component:Index
    },
    {
      path:'/canvas',
      name:'canvas',
      component:Canvas
    },
    {
      path:'/chart',
      name:'Chart',
      component:Chart
    },
    ]
})
