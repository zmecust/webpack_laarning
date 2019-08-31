import 'babel-polyfill';
import Vue from 'vue';
import App from './src/App';
import router from './src/routers';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
