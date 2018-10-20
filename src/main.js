// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

 // mint-ui引入
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// vue-cli 项目中引入mui
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'

import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dataFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// 导入vue-resouce
import VueResource  from 'vue-resource'
Vue.use(VueResource)

// 2.3 全局配置请求的URL根域名
Vue.http.options.root = "http://027xin.com:8899"


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
