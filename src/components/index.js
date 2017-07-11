import Legend from './legend/index'

const components = [
  Legend
]

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}
