<template>
    <article>
        <h2>Example</h2>
        <example :component="Simple" :code="SimpleCode"></example>

        <h2>Label</h2>
        <p>Add a label to the input with the <code>label</code> property.</p>

        <example :component="Label" :code="LabelCode"></example>

        <h2>Placeholder</h2>
        <p>Add a placeholder to the input with the <code>placeholder</code> property.</p>

        <example :component="Placeholder" :code="PlaceholderCode"></example>

        <h2>Help</h2>
        <p>Add help text below the input with the <code>help</code> property.</p>

        <example :component="Help" :code="HelpCode"></example>

        <h2>Value</h2>
        <p>Bind value to your input by using the <code>v-model</code> property.</p>

        <example :component="vModel" :code="vModelCode"></example>

        <h2>Validation Errors and Messaging</h2>
        <p>Add a validation message that can be toggled with the <code>error-message</code> and <code>has-error</code> properties.</p>

        <example :component="Error" :code="ErrorCode"></example>

        <api-reference :data="[{
            props: [
                {
                    name: '<code>v-model</code>',
                    description: 'Value to be bound to the input.',
                    type: '<code>Binding</code>',
                },

                {
                    name: '<code>name</code>',
                    type: '<code>String</code>',
                    description: 'The name and ID of the field.',
                },

                {
                    name: '<code>placeholder</code>',
                    type: '<code>String</code>',
                    description: 'Placeholder value to be displayed inside the input field.',
                },

                {
                    name: '<code>label</code>',
                    type: '<code>String</code>',
                    description: 'Label to be associated with and displayed above the input field.',
                },

                {
                    name: '<code>help</code>',
                    type: '<code>String</code>',
                    description: 'Help text to be displayed below the input field.',
                },

                {
                    name: '<code>type</code>',
                    type: '<code>String</code>',
                    description: 'The input field type.',
                    values: 'text, email, password, url',
                    default: 'text',
                },

                {
                    name: '<code>required</code>',
                    type: '<code>Boolean</code>',
                    description: 'If the input field type is required or not.',
                    values: 'true, false',
                    default: 'false',
                },

                {
                    name: '<code>readonly</code>',
                    type: '<code>Boolean</code>',
                    description: 'If the input field type should be read-only or not.',
                    values: 'true, false',
                    default: 'false',
                },

                {
                    name: '<code>disabled</code>',
                    type: '<code>Boolean</code>',
                    description: 'If the input field type should be disabled or not.',
                    values: 'true, false',
                    default: 'false',
                },

                {
                    name: '<code>monospaced</code>',
                    type: '<code>Boolean</code>',
                    description: 'If the font used in the input field should be monospaced or not.',
                    values: 'true, false',
                    default: 'false',
                },

                {
                    name: '<code>has-error</code>',
                    type: '<code>Boolean</code>',
                    description: 'Toggle if the input field has validation errors or not.',
                    values: 'true, false',
                    default: 'false',
                },

                {
                    name: '<code>error-message</code>',
                    type: '<code>String</code>',
                    description: 'The message to be displayed when the input field has an error.',
                },
            ],
        }]">
        </api-reference>
    </article>
</template>

<script>
    import Simple from '../../examples/Input/Simple'
    import SimpleCode from '!!raw-loader!../../examples/Input/Simple'
    import Label from '../../examples/Input/Label'
    import LabelCode from '!!raw-loader!../../examples/Input/Label'
    import Placeholder from '../../examples/Input/Placeholder'
    import PlaceholderCode from '!!raw-loader!../../examples/Input/Placeholder'
    import Help from '../../examples/Input/Help'
    import HelpCode from '!!raw-loader!../../examples/Input/Help'
    import vModel from '../../examples/Input/vModel'
    import vModelCode from '!!raw-loader!../../examples/Input/vModel'
    import Error from '../../examples/Input/Error'
    import ErrorCode from '!!raw-loader!../../examples/Input/Error'

    export default {
        data() {
            return {
                Simple,
                SimpleCode,
                Label,
                LabelCode,
                Placeholder,
                PlaceholderCode,
                Help,
                HelpCode,
                vModel,
                vModelCode,
                Error,
                ErrorCode,
            }
        }
    }
</script>

