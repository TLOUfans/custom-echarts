import Data from './src/main.vue'

/* istanbul ignore next */
Data.install = function(Vue) {
  Vue.component(Data.name, Data);
};

export default Data;
