<template>
    <article>
        <example :component="Simple" :code="SimpleCode"></example>

        <hr>

        <h2>Opening Modals</h2>
        <p>Opening modals can be done one of two ways. Through the bundled <code>v-modal</code> directive or triggered through two-way data binding via <code>v-model</code>.</p>

        <h3>Directive</h3>
        <p>To open a modal utilizing the <code>v-modal</code> directive, simply add it to any clickable component and specify the <b>name</b> of your modal as the first parameter.</p>
        <example :component="Directive" :code="DirectiveCode"></example>

        <h3>Two-way Data Binding</h3>
        <p>To programmatically open a modal, you can utilize Vue.js' <code>v-model</code> directive on the modal directly. The value bound must be of a <b>Boolean</b> type.</p>
        <example :component="vModel" :code="vModelCode"></example>

        <hr>

        <h2>Size</h2>
        <p>Modals also come in a <b>large</b> and <b>extra large</b> sizing options. Set by utilizing the <code>large</code> or <code>extra-large</code> properties, respectively.</p>
        <example :component="Large" :code="LargeCode"></example>
        <example :component="ExtraLarge" :code="ExtraLargeCode"></example>

        <hr>

        <h2>Adding Titles</h2>
        <p>A title can be specified through the <code>title</code> property.</p>
        <example :component="Title" :code="TitleCode"></example>

        <hr>

        <h2>Disabling The Header</h2>
        <p>If you don't require a header, it can be disabled by specifying the <code>no-header</code> property.</p>
        <example :component="NoHeader" :code="NoHeaderCode"></example>

        <hr>

        <h2>Flush Padding</h2>
        <p>You can specify your modal to have no padding in its body by passing through the <code>flush</code> property. This is great in cases where you'd like to render images and other media.</p>
        <example :component="Flush" :code="FlushCode"></example>
    </article>
</template>

<script>
    import Simple from '../../examples/Modal/Simple'
    import SimpleCode from '!!raw-loader!../../examples/Modal/Simple'
    import Directive from '../../examples/Modal/Directive'
    import DirectiveCode from '!!raw-loader!../../examples/Modal/Directive'
    import vModel from '../../examples/Modal/vModel'
    import vModelCode from '!!raw-loader!../../examples/Modal/vModel'
    import Title from '../../examples/Modal/Title'
    import TitleCode from '!!raw-loader!../../examples/Modal/Title'
    import NoHeader from '../../examples/Modal/NoHeader'
    import NoHeaderCode from '!!raw-loader!../../examples/Modal/NoHeader'
    import Flush from '../../examples/Modal/Flush'
    import FlushCode from '!!raw-loader!../../examples/Modal/Flush'
    import Large from '../../examples/Modal/Large'
    import LargeCode from '!!raw-loader!../../examples/Modal/Large'
    import ExtraLarge from '../../examples/Modal/ExtraLarge'
    import ExtraLargeCode from '!!raw-loader!../../examples/Modal/ExtraLarge'
    
    export default {
        data() {
            return {
                Simple,
                SimpleCode,
                Directive,
                DirectiveCode,
                vModel,
                vModelCode,
                Title,
                TitleCode,
                NoHeader,
                NoHeaderCode,
                Flush,
                FlushCode,
                Large,
                LargeCode,
                ExtraLarge,
                ExtraLargeCode,
            }
        }
    }
</script>
