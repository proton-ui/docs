import Vue from 'vue'
import App from './App'
import router from './router'

// import Proton from '../src'

Vue.config.productionTip = false
// Vue.use(Proton)

const docs = new Vue({
    router,
    components: { App },
    template: '<App/>',
})

document.addEventListener('DOMContentLoaded', function() {
    docs.$mount('#app')
})