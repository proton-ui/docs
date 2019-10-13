<template>
    <article>
        <h2>Yarn</h2>
        <code-reference lang="bash" code="yarn add @proton-ui/proton"></code-reference>

        <h2>Module System</h2>
        <p>When using a module system, you must explicitly install Proton via <code>Vue.use()</code>.</p>

        <code-reference lang="js" :code="useProton | pre"></code-reference>
    </article>
</template>

<script>
    export default {
        data() {
            return {
                useProton: `
                import Vue from 'vue'
                import Proton from '@proton-ui/proton'

                Vue.use(Proton)
                `
            }
        }
    }
</script>
