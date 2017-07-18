import Extend from './src/main.vue'

Extend.install = function(Vue) {
  Vue.component(Extend.name, Extend)
}

export default Extend