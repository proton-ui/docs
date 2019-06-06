<template>
    <section>
        <p-treeview :items="files" v-model="selected" class="mb-10"></p-treeview>

        <p class="mb-2"><strong>Selected:</strong></p>
        <p><code>{{ selected }}</code></p>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                selected: {},
                files: [{
                    id: 1,
                    name: 'Documents',
                    isFolder: true,
                    children: [
                        { id: 2, name: 'Hello.txt', file: true },
                        { id: 3, name: 'Universe.txt', file: true },
                    ],
                }],
            }
        }
    }
</script>
