<template>
    <article>
        <h2>Example</h2>
        <example :component="Simple" :code="SimpleCode"></example>

        <h2>Search</h2>
        <example :component="Search" :code="SearchCode"></example>

        <api-reference :data="[{
            props: [
                {
                    name: '<code>name</code>',
                    description: 'Define the name of the select dropdown. Useful for linking the field label to your select dropdown.',
                    type: '<code>String</code>',
                    values: 'Accepts a string value, like <code>colors</code>',
                    default: '',
                },

                {
                    name: '<code>model</code>',
                    type: '<code>String or Boolean</code>',
                    description: 'If your model is called <code>color</code>, the selected option will be the <code>model</code>',
                    values: '',
                    default: 'this.value',
                },

                {
                    name: '<code>required</code>',
                    type: '<code>Boolean</code>',
                    description: 'If the select dropdown is a required field in a form.',
                    values: 'true, false',
                    default: 'false',
                },

                {
                    name: '<code>disabled</code>',
                    type: '<code>Boolean</code>',
                    description: 'If the select dropdown should be disabled or not.',
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
    import Simple from '../../examples/Select/Simple'
    import SimpleCode from '!!raw-loader!../../examples/Select/Simple'
    import Search from '../../examples/Select/Search'
    import SearchCode from '!!raw-loader!../../examples/Select/Search'

    export default {
        data() {
            return {
                Simple,
                SimpleCode,
                Search,
                SearchCode,
            }
        }
    }
</script>

