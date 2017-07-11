import Tool from './src/main'

/* istanbul ignore next */
Tool.install = function(Vue) {
  Vue.component(Tool.name, Tool)
}

export default Tool
