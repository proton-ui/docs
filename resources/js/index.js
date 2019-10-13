import Vue from 'vue'
import App from './App'
import router from './router'
import Proton from '@proton-ui/proton'
import hljs from 'highlight.js'

import Example from './components/Example'
import APIReference from './components/APIReference'
import CodeReference from './components/CodeReference'
import Callout from './components/Callout'

Vue.config.productionTip = false
Vue.use(Proton)

Vue.component('example', Example)
Vue.component('api-reference', APIReference)
Vue.component('code-reference', CodeReference)
Vue.component('callout', Callout)

Vue.directive('highlight', {
    deep: true,
    bind(el, binding) {
        // On first bind, highlight all targets
        const targets = el.querySelectorAll('code')
        for (const target of targets) {
            // if a value is directly assigned to the directive, use this
            // instead of the element content.
            if (binding.value) {
                target.innerHTML = binding.value
            }
            hljs.highlightBlock(target)
        }
    },

    componentUpdated(el, binding) {
        // After an update, re-fill the content and then highlight
        const targets = el.querySelectorAll('code')
        for (const target of targets) {
            if (binding.value) {
                target.innerHTML = binding.value
                hljs.highlightBlock(target)
            }
        }
    }
})

Vue.filter('pre', (text) => {
    if (!text) return

    // Remove first blank line
    text = text.replace(/^\s*[\r\n]/g, '')

    // Find how many whitespaces before the first character of the first line
    const whitespaces = /^[ \t]*./.exec(text).toString().slice(0, -1)

    // Replace first occurrance of whitespace on each line
    let newText = []
    text.split(/\r\n|\r|\n/).forEach((line) => {
        newText.push(line.replace(whitespaces, ''))
    })
    newText = newText.join('\r\n')

    return newText
})

const docs = new Vue({
    router,
    components: { App },
    template: '<App/>',
})

document.addEventListener('DOMContentLoaded', function() {
    docs.$mount('#app')
})