<template>
    <article>
        <h2>Example</h2>
        <example :component="Simple" :code="SimpleCode"></example>
    </article>
</template>

<script>
    import Simple from '../../examples/Select/Simple'
    import SimpleCode from '!!raw-loader!../../examples/Select/Simple'

    export default {
        data() {
            return {
                Simple,
                SimpleCode,
            }
        }
    }
</script>

