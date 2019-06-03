import Vue from 'vue'
import Router from 'vue-router'

import routes from '@/data/routes'

Vue.use(Router)

function route(path, component) {
    return {
        path,
        name: path,
        meta: routes[path],
        component: () => import(`../pages/${component}`)
    }
}

const records = [
    route('/', 'Home'),

    route('/documentation', 'Documentation'),
    route('/documentation/getting-started', 'GettingStarted'),
    route('/documentation/contributing', 'Contributing'),
    route('/documentation/roadmap', 'Roadmap'),

    // Components
    route('/documentation/components/button', 'Components/Button'),

    { path: '*', redirect: '/' }
]

const router = new Router({
    base: __dirname,
    routes: records,
})

export default router