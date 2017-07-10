// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import 'element-ui/lib/theme-default/index.css'
//自定义组件
import Data from './components/data/index'
import Base from './components/base/index'
import Title from './components/title/index'
import AxisX from './components/axisX/index'
import AxisY from './components/axisY/index'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Data)
Vue.use(Base)
Vue.use(Title)
Vue.use(AxisX)
Vue.use(AxisY)
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
