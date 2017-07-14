// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import 'element-ui/lib/theme-default/index.css'
//自定义组件

import Base from './components/base/index'
import Title from './components/title/index'
import AxisX from './components/axisX/index'
import AxisY from './components/axisY/index'
import Legend from './components/legend/index'
import Tip from './components/tip/index'
import Tool from './components/tool/index'
import Sequ from './components/sequ/index'
import Font from './components/font/index'

require('echarts/theme/macarons')
require('echarts/theme/dark')
require('echarts/theme/infographic')
require('echarts/theme/roma')
require('echarts/theme/shine')
require('echarts/theme/vintage')
Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.use(Base)
Vue.use(Title)
Vue.use(AxisX)
Vue.use(AxisY)
Vue.use(Legend)
Vue.use(Tip)
Vue.use(Tool)
Vue.use(Sequ)
Vue.use(Font)
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
