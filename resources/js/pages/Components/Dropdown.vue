<template>
    <article>
        <h2>Example</h2>
        <p>A dropdown is made up of two components. The outer-wrapping <code>dropdown</code> and the inner <code>dropdown-item</code>.</p>

        <example :component="Simple" :code="SimpleCode"></example>

        <h3>Right Aligned</h3>
        <p>Make the dropdown menu right-aligned with the <code>right</code> property.</p>

        <example :component="RightAligned" :code="RightAlignedCode"></example>

        <h2>Dropdown Items</h2>

        <h3>Use As Link</h3>
        <p>To convert the dropdown item to an anchor, simply provide an `href` or `to` property value.</p>

        <example :component="Links" :code="LinksCode"></example>

        <api-reference :data="[{
                title: 'Dropdown',
                props: [
                    {
                        name: '<code>right</code>',
                        description: 'Whether the dropdown menu should be aligned to the right edge or not.',
                        type: '<code>Boolean</code>',
                        values: 'true, false',
                        default: 'false',
                    }
                ],

                slots: [
                    {
                        name: '<code>default</code>',
                        description: 'Content of the dropdown button.',
                    },
                    {
                        name: '<code>options</code>',
                        description: 'Content of the dropdown options menu.',
                    },
                ]
            },
            {
                title: 'Dropdown Item',
                props: [
                    {
                        name: '<code>href</code>',
                        description: 'Convert the dropdown item to an anchor by supplying a URL or URL fragment that the hyperlink points to.',
                        type: '<code>String</code>',
                    },

                    {
                        name: '<code>to</code>',
                        description: 'Convert the dropdown item to a Vue Router anchor by supplying a URL or URL fragment that the hyperlink points to.',
                        type: '<code>String</code>',
                    }
                ],

                slots: [
                    {
                        name: '<code>default</code>',
                        description: 'Content of the dropdown item.',
                    },
                ]
            }]">
        </api-reference>
    </article>
</template>

<script>
    import Simple from '../../examples/Dropdown/Simple'
    import SimpleCode from '!!raw-loader!../../examples/Dropdown/Simple'
    import RightAligned from '../../examples/Dropdown/RightAligned'
    import RightAlignedCode from '!!raw-loader!../../examples/Dropdown/RightAligned'
    import Links from '../../examples/Dropdown/Links'
    import LinksCode from '!!raw-loader!../../examples/Dropdown/Links'

    export default {
        data() {
            return {
                Simple,
                SimpleCode,
                RightAligned,
                RightAlignedCode,
                Links,
                LinksCode,
            }
        }
    }
</script>

