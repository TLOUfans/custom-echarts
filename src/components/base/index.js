import Base from './src/main.vue'

/* istanbul ignore next */
Base.install = function(Vue) {
  Vue.component(Base.name, Base);
};

export default Base;
