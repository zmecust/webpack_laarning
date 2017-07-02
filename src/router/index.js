import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import SPA from '../views/SinglePageApp';

const router = new Router({
    routes: [
        {
            path: '/spa',
            component: SPA
        }
    ]
});

export default router;