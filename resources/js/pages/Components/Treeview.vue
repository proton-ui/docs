<template>
    <article>
        <h2>Example</h2>
        <example :component="Simple" :code="SimpleCode"></example>

        <h2>Item Structure</h2>
        <p>When passing items to the treeview component, an array of objects is expected. There are two properties that will be taken into consideration: name and children. These can be nested indefinitely.</p>

        <code-reference lang="json" :code="ItemStructure | pre"></code-reference>

        <p>You may optionally pass any additional data along with your items. The additional data may be used within the provided scoped slots when customizing the look and feel of your treeview.</p>

        <h2>Advanced Treeview</h2>
        <p>When combined with additional data, you can easily customize the presentation of your items. The following example shows the use of the <code>prepend</code> scoped slot to display a custom icon per item.</p>

        <example :component="Advanced" :code="AdvancedCode"></example>

        <api-reference :data="[{
            slots: [
                {
                    name: '<code>label</code>',
                    description: 'Label of each item.',
                    scope: 'item, open',
                },

                {
                    name: '<code>prepend</code>',
                    description: 'Content prepending each label.',
                    scope: 'item, open',
                },

                {
                    name: '<code>append</code>',
                    description: 'Content appending each label.',
                    scope: 'item, open',
                },
            ]
        }]">

        </api-reference>
    </article>
</template>

<script>
    import Simple from '../../examples/Treeview/Simple'
    import SimpleCode from '!!raw-loader!../../examples/Treeview/Simple'
    import Advanced from '../../examples/Treeview/Advanced'
    import AdvancedCode from '!!raw-loader!../../examples/Treeview/Advanced'

    export default {
        data() {
            return {
                Simple,
                SimpleCode,
                Advanced,
                AdvancedCode,
                ItemStructure: `
                [{
                    name: 'Documents',
                    isFolder: true,
                    children: [
                        { name: 'Hello.txt', file: true },
                        { name: 'Universe.txt', file: true },
                    ],
                }]`,
            }
        }
    }
</script>

