<template>
    <article>
        <h2>Example</h2>
        <p>Sort elements in a single collection, maintaining order for all but the element being dragged.</p>

        <p>Your original set of data will be kept in sync with sort changes. This allows you to watch your original set of data to perform any necessary API calls to update your database/storage.</p>
        
        <example :component="Simple" :code="SimpleCode"></example>
    </article>
</template>

<script>
    import Simple from '../../examples/Sortable/Simple'
    import SimpleCode from '!!raw-loader!../../examples/Sortable/Simple'

    export default {
        data() {
            return {
                Simple,
                SimpleCode,
            }
        }
    }
</script>

