import Font from './src/main'

/* istanbul ignore next */
Font.install = function(Vue) {
  Vue.component(Font.name, Font)
}

export default Font
