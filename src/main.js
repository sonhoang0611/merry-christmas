import Vue from 'vue';
import App from './App.vue';
import './stylesheets/xmas.css.scss';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
