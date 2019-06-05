<template>
    <article>
        <h2>Example</h2>
        <example :component="Simple" :code="SimpleCode"></example>

        <h2>Size</h2>
        <p>Define the size of the button with the <code>size</code> property.</p>

        <example :component="LargeSize" :code="LargeSizeCode"></example>
        <example :component="SmallSize" :code="SmallSizeCode"></example>

        <api-reference :data="[{
            props: [
                {
                    name: '<code>size</code>',
                    description: 'Define the size of the button.',
                    type: '<code>String</code>',
                    values: 'normal, small, large',
                    default: 'normal',
                },

                {
                    name: '<code>theme</code>',
                    type: '<code>String</code>',
                    description: 'Define the theme of the button.',
                    values: 'default, primary, secondary, info, success, warning, danger, dark',
                    default: 'default',
                },

                {
                    name: '<code>disabled</code>',
                    type: '<code>Boolean</code>',
                    description: 'If the button should be disabled or not.',
                    values: 'true, false',
                    default: 'false',
                }
            ],

            slots: [
                {
                    name: '<code>default</code>',
                    description: 'Main text of the button.',
                }
            ]
        }]">
        </api-reference>
    </article>
</template>

<script>
    import Simple from '../../examples/Button/Simple'
    import SimpleCode from '!!raw-loader!../../examples/Button/Simple'
    import LargeSize from '../../examples/Button/LargeSize'
    import LargeSizeCode from '!!raw-loader!../../examples/Button/LargeSize'
    import SmallSize from '../../examples/Button/SmallSize'
    import SmallSizeCode from '!!raw-loader!../../examples/Button/SmallSize'

    export default {
        data() {
            return {
                Simple,
                SimpleCode,
                LargeSize,
                LargeSizeCode,
                SmallSize,
                SmallSizeCode,
            }
        }
    }
</script>

