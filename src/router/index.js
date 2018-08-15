import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/login'
import Index from '../pages/main/index'
import Canvas from '../components/canvas'
import Chart from '../components/charts/index'
import Report from '../components/report/index'
import Monitor from '../components/Monitor/index'

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
      path:"/index",
      name:'index',
      component:Index,
      children:[
        {
          path:'/report',
          name:'report',
          component:Report
        },
        {
          path:'/chart',
          name:'Chart',
          component:Chart
        },
        {
          path:'/monitor',
          name:'Monitor',
          component:Monitor
        }
        ]
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
