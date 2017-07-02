require('./static/js/example1.js');
require('./static/js/example2.js');
require('./static/css/style.css');

import Vue from 'vue';
import App from './App';
import router from './router';

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})