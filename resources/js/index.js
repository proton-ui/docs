import Vue from 'vue'
import App from './App'
import router from './router'
import Proton from '@efelle/proton'

import Example from './components/Example'

Vue.config.productionTip = false
Vue.use(Proton)

Vue.component('example', Example)

const docs = new Vue({
    router,
    components: { App },
    template: '<App/>',
})

document.addEventListener('DOMContentLoaded', function() {
    docs.$mount('#app')
})