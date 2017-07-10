import Title from './src/main.vue'

/* istanbul ignore next */
Title.install = function(Vue) {
  Vue.component(Title.name, Title);
};

export default Title;
