<template>
    <article>
        <h2>Example</h2>
        <p>To create a basic radio component, you must specify the <code>name</code>, <code>id</code>, and <code>value</code> properties.</p>

        <example :component="Simple" :code="SimpleCode"></example>

        <h2>Checked State</h2>
        <p>To bind the checked state, you may supply a <code>v-model</code> property.</p>

        <callout tip>
            In this instance, the <code>value</code> prop does not translate to a <code>v-model</code> binding. The <code>v-model</code> instance is instead tied to a computed <code>computedValue</code> property to free up the use of the <code>value</code> prop for the true value of the radio element.
        </callout>

        <example :component="vModel" :code="vModelCode"></example>

        <h2>Grouping</h2>
        <p>In most cases, radios will be grouped together. You may wrap a set of radio components within a radio group, allowing you to define a label, help text, and error messaging.</p>

        <example :component="Grouped" :code="GroupedCode"></example>

        <h3>Inline Radios</h3>
        <p>You may make your radio group become inline by specifying the <code>inline</code> prop.</p>

        <example :component="Inline" :code="InlineCode"></example>

        <api-reference :data="[{
                title: 'Radio',
                props: [
                    {
                        name: '<code>v-model</code>',
                        description: 'The value to be bound by the radio(s)',
                        type: '<code>Binding</code>'
                    },

                    {
                        name: '<code>id</code>',
                        description: 'The unique ID of the radio.',
                        type: '<code>String</code>',
                    },

                    {
                        name: '<code>name</code>',
                        description: 'The name of the radio.',
                        type: '<code>String</code>',
                    },

                    {
                        name: '<code>native-value</code>',
                        description: 'The native value associated with the radio.',
                        type: '<code>String</code>',
                    },

                    {
                        name: '<code>readonly</code>',
                        description: 'If the radio should be read-only or not.',
                        type: '<code>Boolean</code>',
                        values: 'true, false',
                        default: 'false'
                    },

                    {
                        name: '<code>disabled</code>',
                        description: 'If the radio should be disabled or not.',
                        type: '<code>Boolean</code>',
                        values: 'true, false',
                        default: 'false'
                    },
                ]
            },
            
            {
                title: 'Radio Group',
                props: [
                    {
                        name: '<code>help</code>',
                        description: 'Help text to be displayed below the radio items.',
                        type: '<code>String</code>',
                    },

                    {
                        name: '<code>required</code>',
                        description: 'If the radio group is required or not.',
                        type: '<code>Boolean</code>',
                        values: 'true, false',
                        default: 'false'
                    },

                    {
                        name: '<code>has-error</code>',
                        description: 'If the radio has errors or not.',
                        type: '<code>Boolean</code>',
                        values: 'true, false',
                        default: 'false'
                    },

                    {
                        name: '<code>error-message</code>',
                        description: 'The message to be displayed when the radio group has an error.',
                        type: '<code>String</code>',
                    },
                ]
            }]">
        </api-reference>
    </article>
</template>

<script>
    import Simple from '../../examples/Radio/Simple'
    import SimpleCode from '!!raw-loader!../../examples/Radio/Simple'
    import vModel from '../../examples/Radio/vModel'
    import vModelCode from '!!raw-loader!../../examples/Radio/vModel'
    import Grouped from '../../examples/Radio/Grouped'
    import GroupedCode from '!!raw-loader!../../examples/Radio/Grouped'
    import Inline from '../../examples/Radio/Inline'
    import InlineCode from '!!raw-loader!../../examples/Radio/Inline'

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

