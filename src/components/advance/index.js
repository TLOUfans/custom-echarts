import Theme from './src/main.vue'

/* istanbul ignore next */
Theme.install = function(Vue) {
  Vue.component(Theme.name, Theme);
};

export default Theme;
