import Legend from './src/main'

/* istanbul ignore next */
Legend.install = function(Vue) {
  Vue.component(Legend.name, Legend)
}

export default Legend
