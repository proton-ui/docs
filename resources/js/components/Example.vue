<template>
    <div class="proton-example">
        <div class="proton-example__preview" ref="example">
            <component :is="component"></component>
        </div>

        <div class="proton-example__markup">
            <code-reference :code="code"></code-reference>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'example',

        props: {
            component: [Object, Function],
            code: String,
        }
    }
</script>

<style>
    
</style>
