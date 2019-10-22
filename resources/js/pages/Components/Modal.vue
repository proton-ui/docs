<template>
    <article>
        <example :component="Simple" :code="SimpleCode"></example>

        <hr>

        
    </article>
</template>

<script>
    import Simple from '../../examples/Modal/Simple'
    import SimpleCode from '!!raw-loader!../../examples/Modal/Simple'
    
    export default {
        data() {
            return {
                Simple,
                SimpleCode,
            }
        }
    }
</script>

