import WlButtons from './buttons.vue';

WlButtons.install = function (Vue) {
  Vue.component(WlButtons.name, WlButtons);
}

export default WlButtons;