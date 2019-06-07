<template>
    <div class="example">
        <div class="example__preview" ref="example">
            <component :is="component"></component>
        </div>

        <div class="example__markup">
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
