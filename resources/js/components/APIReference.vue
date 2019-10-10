<template>
    <section class="api__reference">
        <h2>API</h2>

        <div v-for="(component, index) in data" :key="component.title || index">
            <h3 v-if="component.title" class="mb-4">{{ component.title }}</h3>

            <div class="card">
                <p-tabs>
                    <p-tab v-if="component.props" name="Properties">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Type</th>
                                    <th>Values</th>
                                    <th>Default</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="prop in component.props" :key="prop.name">
                                    <td v-html="prop.name"></td>
                                    <td v-html="prop.description"></td>
                                    <td v-html="prop.type"></td>
                                    <td v-html="prop.values"></td>
                                    <td>{{ prop.default }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </p-tab>

                    <p-tab v-if="component.slots" name="Slots">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Scope</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="slot in component.slots" :key="slot.name">
                                    <td v-html="slot.name"></td>
                                    <td>{{ slot.description }}</td>
                                    <td>{{ slot.scope }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </p-tab>

                    <p-tab v-if="component.events" name="Events">
                        {{ component.events }}
                    </p-tab>

                    <p-tab v-if="component.methods" name="Methods">
                        {{ component.methods }}
                    </p-tab>
                </p-tabs>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            data: Array,
        },
    }
</script>
