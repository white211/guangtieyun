import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/login'
import Index from '../pages/main/index'
import Canvas from '../components/canvas'
import Chart from '../components/version2/charts/index'
import Report from '../components/version2/report/index'
import Monitor from '../components/version2/Monitor/index'
import  test from '../components/version2/charts/test'
import Home from '../components/version2/home/home'

Vue.use(Router)

export default new Router({
  // mode:'history',
  // base:'/gt/',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      name:'/',
      path:'/',
      redirect:'/home'
    },
    {
      path:"/index",
      name:'index',
      component:Index,
      redirect:'/home',
      children:[
        {
          name:'home',
          path:'/home',
          component:Home,
        },
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
    {
      name:'test',
      path:'/test',
      component:test
    }
    ]
})
