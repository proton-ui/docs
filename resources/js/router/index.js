import Vue from 'vue'
import Router from 'vue-router'

import routes from 'resources/data/routes'

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
    {
        path: '/',
        redirect: '/documentation/getting-started',
    },

    route('/documentation/getting-started', 'GettingStarted'),
    route('/documentation/contributing', 'Contributing'),
    route('/documentation/roadmap', 'Roadmap'),

    // Components
    route('/documentation/components/button', 'Components/Button'),
    route('/documentation/components/card', 'Components/Card'),
    route('/documentation/components/chart', 'Components/Chart'),
    route('/documentation/components/checkbox', 'Components/Checkbox'),
    route('/documentation/components/collapse', 'Components/Collapse'),
    route('/documentation/components/dropdown', 'Components/Dropdown'),
    route('/documentation/components/input', 'Components/Input'),
    route('/documentation/components/treeview', 'Components/Treeview'),

    { path: '*', redirect: '/' }
]

const router = new Router({
    base: __dirname,
    routes: records,
})

export default router