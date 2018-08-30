import 'babel-polyfill';
import Vue from 'vue';
import App from './src/App';
import ElementUI from 'element-ui';
import router from './src/routers';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})