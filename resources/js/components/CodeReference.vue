<template>
    <div class="code-reference">
        <div v-if="title" class="code-reference--title">{{ title }}</div>

        <pre v-highlight><code :class="lang">{{ code }}</code></pre>
    </div>
</template>

<script>
    export default {
        name: 'code-reference',

        props: {
            lang: {
                type: String,
                default: 'html',
            },
            code: String,
            title: String,
        }
    }
</script>
