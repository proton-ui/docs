<template>
    <article>
        <h2>Example</h2>
        <p>To create a basic checkbox component, you must specify the <code>name</code>, <code>id</code>, and <code>value</code> properties.</p>

        <example :component="Simple" :code="SimpleCode"></example>

        <h2>Checked State</h2>
        <p>To bind the checked state, you may supply a <code>v-model</code> property.</p>

        <callout tip>
            In this instance, the <code>value</code> prop does not translate to a <code>v-model</code> binding. The <code>v-model</code> instance is instead tied to a computed <code>computedValue</code> property to free up the use of the <code>value</code> prop for the true value of the checkbox element.
        </callout>

        <example :component="vModel" :code="vModelCode"></example>

        <h2>Grouping</h2>
        <p>In most cases, checkboxes will be grouped together. You may wrap a set of checkbox components within a checkbox group, allowing you to define a label, help text, and error messaging.</p>

        <example :component="Grouped" :code="GroupedCode"></example>

        <h3>Inline Checkboxes</h3>
        <p>You may make your checkbox group become inline by specifying the <code>inline</code> prop.</p>

        <example :component="Inline" :code="InlineCode"></example>

        <api-reference :data="[{
                title: 'Checkbox',
                props: [
                    {
                        name: '<code>v-model</code>',
                        description: 'The value to be bound by the checkbox(es)',
                        type: '<code>Binding</code>'
                    },

                    {
                        name: '<code>id</code>',
                        description: 'The unique ID of the checkbox.',
                        type: '<code>String</code>',
                    },

                    {
                        name: '<code>name</code>',
                        description: 'The name of the checkbox.',
                        type: '<code>String</code>',
                    },

                    {
                        name: '<code>native-value</code>',
                        description: 'The native value associated with the checkbox.',
                        type: '<code>String</code>',
                    },

                    {
                        name: '<code>readonly</code>',
                        description: 'If the checkbox should be read-only or not.',
                        type: '<code>Boolean</code>',
                        values: 'true, false',
                        default: 'false'
                    },

                    {
                        name: '<code>disabled</code>',
                        description: 'If the checkbox should be disabled or not.',
                        type: '<code>Boolean</code>',
                        values: 'true, false',
                        default: 'false'
                    },
                ]
            },
            
            {
                title: 'Checkbox Group',
                props: [
                    {
                        name: '<code>help</code>',
                        description: 'Help text to be displayed below the checkbox items.',
                        type: '<code>String</code>',
                    },

                    {
                        name: '<code>required</code>',
                        description: 'If the checkbox group is required or not.',
                        type: '<code>Boolean</code>',
                        values: 'true, false',
                        default: 'false'
                    },

                    {
                        name: '<code>has-error</code>',
                        description: 'If the checkbox has errors or not.',
                        type: '<code>Boolean</code>',
                        values: 'true, false',
                        default: 'false'
                    },

                    {
                        name: '<code>error-message</code>',
                        description: 'The message to be displayed when the checkbox group has an error.',
                        type: '<code>String</code>',
                    },
                ]
            }]">
        </api-reference>
    </article>
</template>

<script>
    import Simple from '../../examples/Checkbox/Simple'
    import SimpleCode from '!!raw-loader!../../examples/Checkbox/Simple'
    import vModel from '../../examples/Checkbox/vModel'
    import vModelCode from '!!raw-loader!../../examples/Checkbox/vModel'
    import Grouped from '../../examples/Checkbox/Grouped'
    import GroupedCode from '!!raw-loader!../../examples/Checkbox/Grouped'
    import Inline from '../../examples/Checkbox/Inline'
    import InlineCode from '!!raw-loader!../../examples/Checkbox/Inline'

    export default {
        data() {
            return {
                Simple,
                SimpleCode,
                vModel,
                vModelCode,
                Grouped,
                GroupedCode,
                Inline,
                InlineCode,
            }
        }
    }
</script>

