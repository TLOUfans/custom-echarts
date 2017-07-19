import Base from './base/index'
import Title from './title/index'
import AxisX from './axisX/index'
import AxisY from './axisY/index'
import Legend from './legend/index'
import Tip from './tip/index'
import Tool from './tool/index'
import Sequ from './sequ/index'
import Extend from './extend/index'
import Font from './font/index'

const components = [
  Base,
  Title,
  AxisX,
  AxisY,
  Legend,
  Tip,
  Tool,
  Sequ,
  Extend,
  Font
]

const MyComponents = {
  install(Vue, options) {
    components.map(component => {
      Vue.component(component.name, component)
    })
  }
}

export default MyComponents
