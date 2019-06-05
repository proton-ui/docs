<template>
    <article>
        <h2>Example</h2>
        <example :component="Simple" :code="SimpleCode"></example>

        <api-reference :data="[{
            props: [
                {
                    name: '<code>theme</code>',
                    description: 'Define the theme of the card.',
                    type: '<code>String</code>',
                    values: 'default, dark',
                    default: 'default',
                },

                {
                    name: '<code>no-body</code>',
                    type: '<code>Boolean</code>',
                    description: 'Disable padding inside card body.',
                    values: 'true, false',
                    default: 'false',
                },
            ],

            slots: [
                {
                    name: '<code>default</code>',
                    description: 'Main body of the card.',
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

