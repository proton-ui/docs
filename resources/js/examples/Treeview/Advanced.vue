<template>
    <section>
        <p-treeview :items="directories" v-model="selected" class="mb-10">
            <template slot="prepend" slot-scope="{ node, open }">
                <i class="fas fa-fw mr-2" :class="{'fa-folder-open': open, 'fa-folder': ! open}" v-if="! node.file"></i>
                <i class="fas fa-file-alt fa-fw mr-2" v-else></i>
            </template>
        </p-treeview>

        <p class="mb-2"><strong>Selected:</strong></p>
        <p><code>{{ selected }}</code></p>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                selected: {},
                directories: [
                    {
                        id: 1,
                        name: 'Folder 1',
                        children: [
                            { id: 2, name: 'hello', file: true },
                            { id: 3, name: 'wat', file: true },
                            {
                                id: 4,
                                name: 'child folder',
                                isFolder: true,
                                children: [
                                    {
                                        id: 5,
                                        name: 'child folder',
                                        isFolder: true,
                                        children: [
                                            { id: 6, name: 'hello', file: true },
                                            { id: 7, name: 'wat', file: true }
                                        ]
                                    },
                                    { id: 8, name: 'hello', file: true },
                                    { id: 9, name: 'wat', file: true },
                                    {
                                        id: 10,
                                        name: 'child folder',
                                        isFolder: true,
                                        children: [
                                            { id: 11, name: 'hello', file: true },
                                            { id: 12, name: 'wat', file: true }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 13,
                        name: 'Folder 2',
                        children: [
                            { id: 14, name: 'hello', file: true },
                            { id: 15, name: 'wat', file: true },
                            {
                                id: 16,
                                name: 'child folder',
                                isFolder: true,
                                children: [
                                    {
                                        id: 17,
                                        name: 'child folder',
                                        isFolder: true,
                                        children: [
                                            { id: 18, name: 'hello', file: true },
                                            { id: 19, name: 'wat', file: true }
                                        ]
                                    },
                                    { id: 20, name: 'hello', file: true },
                                    { id: 21, name: 'wat', file: true },
                                    {
                                        id: 22,
                                        name: 'child folder',
                                        isFolder: true,
                                        children: [
                                            { id: 23, name: 'hello', file: true },
                                            { id: 24, name: 'wat', file: true }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
            }
        }
    }
</script>
