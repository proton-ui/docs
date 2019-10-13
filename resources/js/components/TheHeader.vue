<template>
    <header>
        <h1 v-html="title" class="font-sans font-bold break-normal text-gray-900 pb-2 text-4xl leading-tight"></h1>
        <h2 v-html="subtitle" class="font-sans break-normal text-gray-600 font-normal text-xl"></h2>
    </header>
</template>

<script>
    export default {
        props: {
            breadcrumb: Array,
            title: String,
            subtitle: String,
        }
    }
</script>

