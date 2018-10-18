import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
// import XiangYang from '@/components/XiangYang'
// import Xyyyyyy from '@/components/Xyyyyyy'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      component: home
    },
    // {
    //   path: '/xy',
    //   component: XiangYang,
    //   children: [
    //     { 
    //       path: 'xyy',
    //       component: Xyyyyyy
    //   }
    // ]
      
    // }
  ]
})
