<template>
    <article>
        <h2>Example</h2>
        <example :component="Simple" :code="SimpleCode"></example>

        <h2>Theme</h2>
        <p>Define the theme of the card with the <code>theme</code> property.</p>

        <example :component="Theme" :code="ThemeCode"></example>

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
    import Simple from '../../examples/Card/Simple'
    import SimpleCode from '!!raw-loader!../../examples/Card/Simple'
    import Theme from '../../examples/Card/Theme'
    import ThemeCode from '!!raw-loader!../../examples/Card/Theme'

    export default {
        data() {
            return {
                Simple,
                SimpleCode,
                Theme,
                ThemeCode,
            }
        }
    }
</script>

