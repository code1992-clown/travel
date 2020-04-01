import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import My from '@/pages/my'
import Detail from '@/pages/detail'
import Login from '@/pages/login'
import Loginend from '@/components/loginend'
import Register from '@/components/register'
import Search1 from '@/pages/search1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/my',
      name: 'my',
      component:My
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component:Detail
    },
    {
      path: '/login',
      name: 'login',
      component:Login,
      redirect:'/loginend',
      children:[
        {
          path: '/register',
          name: 'register',
          component:Register
        },
        {
          path: '/loginend',
          name: 'loginend',
          component:Loginend
        },
      ]
    },
    
    {
      path: '/search1',
      name: 'search1',
      component:Search1,
      meta:{
        keepAlive:true
      }
    }
  ]
})
