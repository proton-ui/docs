<template>
    <article>
        <h2>Example</h2>
        <example :component="Simple" :code="SimpleCode"></example>

        <h2>Item Structure</h2>
        <p>When passing items to the treeview component, an array of objects is expected. There are two properties that will be taken into consideration: name and children. These can be nested indefinitely.</p>

        <code-reference lang="json" :code="ItemStructure"></code-reference>

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
    import Simple from '../../examples/Treeview/Simple'
    import SimpleCode from '!!raw-loader!../../examples/Treeview/Simple'
    import ItemStructure from '../../examples/Treeview/ItemStructure.json'

    export default {
        data() {
            return {
                Simple,
                SimpleCode,
                ItemStructure,
            }
        }
    }
</script>

