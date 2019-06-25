<template>
    <article>
        <h2>Example</h2>
        <p>Proton's Sortables are powered by <a href="https://shopify.github.io/draggable/" target="_blank">draggable</a>. Sort DOM nodes with style. Drag items in a collection from one spot to another and watch everything snap into place.</p>

        <example :component="Simple" :code="SimpleCode"></example>

        <h2>Value</h2>
        <p>Your original set of data will be kept in sync with sort changes. This allows you to watch your original set of data to perform any necessary API calls to update your database/storage.</p>

        <example :component="vModel" :code="vModelCode"></example>
    </article>
</template>

<script>
    import Simple from '../../examples/Sortable/Simple'
    import SimpleCode from '!!raw-loader!../../examples/Sortable/Simple'
    import vModel from '../../examples/Sortable/vModel'
    import vModelCode from '!!raw-loader!../../examples/Sortable/vModel'

    export default {
        data() {
            return {
                Simple,
                SimpleCode,
                vModel,
                vModelCode,
            }
        }
    }
</script>

