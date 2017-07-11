import Sequ from './src/main'

/* istanbul ignore next */
Sequ.install = function(Vue) {
  Vue.component(Sequ.name, Sequ)
}

export default Sequ
