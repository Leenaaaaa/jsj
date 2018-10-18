import Vue from 'vue'
import Router from 'vue-router'

import homeContainer from '@/components/tabbar/homeContainer'   // @表示src这层目录
import member from '@/components/tabbar/member'
import search from '@/components/tabbar/search'
import shopcar from '@/components/tabbar/shopcar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: homeContainer
    },
    {
      path: '/member',
      component: member,
    },
    {
      path: '/search',
      component: search,
    },
    {
      path: '/shopcar',
      component: shopcar
    }
  ],
  linkActiveClass :'mui-active'    // 覆盖默认的路由高亮的类 默认的类
})
