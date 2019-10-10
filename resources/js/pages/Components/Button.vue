<template>
    <article>
        <h2>Example</h2>
        <example :component="Simple" :code="SimpleCode"></example>

        <h2>Size</h2>
        <p>Define the size of the button with the <code>size</code> property.</p>

        <example :component="LargeSize" :code="LargeSizeCode"></example>
        <example :component="SmallSize" :code="SmallSizeCode"></example>

        <h2>To</h2>
        <callout warning title="Vue Router is required">
            More information available at https://router.vuejs.org/guide/.
        </callout>

        <p>Allows for programmatic navigation via <code>this.$router.push</code></p>
        <example :component="To" :code="ToCode"></example>

        <h2>Href</h2>
        <p>Treats your button as a link. Useful for linking to pages, documents, or external sites</p>
        <example :component="Href" :code="HrefCode"></example>

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
                },

                {
                    name: '<code>to</code>',
                    type: '<code>Object</code>&nbsp;OR&nbsp;<code>String</code>',
                    description: 'If the button should be used with <code>$this.$router.push()</code>',
                    values: '<code>{}</code> object or string of path name like <code>static</code>',
                    default: '',
                },

                {
                    name: '<code>href</code>',
                    type: '<code>String</code>',
                    description: 'If the button should be treated like an anchor tag',
                    values: 'Generic path to page, document, or external website',
                    default: '',
                },
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
    import To from '../../examples/Button/To'
    import ToCode from '!!raw-loader!../../examples/Button/To'
    import Href from '../../examples/Button/Href'
    import HrefCode from '!!raw-loader!../../examples/Button/Href'
    import Simple from '../../examples/Button/Simple'
    import SimpleCode from '!!raw-loader!../../examples/Button/Simple'
    import LargeSize from '../../examples/Button/LargeSize'
    import LargeSizeCode from '!!raw-loader!../../examples/Button/LargeSize'
    import SmallSize from '../../examples/Button/SmallSize'
    import SmallSizeCode from '!!raw-loader!../../examples/Button/SmallSize'

    export default {
        data() {
            return {
                To,
                ToCode,
                Href,
                HrefCode,
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

