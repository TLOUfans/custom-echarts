// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import 'element-ui/lib/theme-default/index.css'

//引入自定义组件
import MyComponents from './components/myComponents'

//引入echarts主题
require('echarts/theme/macarons')
require('echarts/theme/dark')
require('echarts/theme/infographic')
require('echarts/theme/roma')
require('echarts/theme/shine')
require('echarts/theme/vintage')

Vue.config.productionTip = false
Vue.use(ElementUI)

//使用自定义组件
Vue.use(MyComponents)
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
