<template>
    <article>
        <h2>Example</h2>
        <example :component="Simple" :code="SimpleCode"></example>

        <api-reference :data="[{
            slots: [
                {
                    name: '<code>default</code>',
                    description: 'The content to show or hide.',
                }
            ]
        }]">
        </api-reference>
    </article>
</template>

<script>
    import Simple from '../../examples/Collapse/Simple'
    import SimpleCode from '!!raw-loader!../../examples/Collapse/Simple'

    export default {
        data() {
            return {
                Simple,
                SimpleCode,
            }
        }
    }
</script>

