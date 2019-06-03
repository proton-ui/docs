<template>
    <p-treeview :items="files"></p-treeview>
</template>

<script>
    export default {
        data() {
            return {
                files: [{
                    name: 'Documents',
                    isFolder: true,
                    children: [
                        { name: 'Hello.txt', file: true },
                        { name: 'Universe.txt', file: true },
                    ],
                }],
            }
        }
    }
</script>
